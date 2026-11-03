/**
 * Contact form. Sends the message to the owner's email through Web3Forms
 * (free, no server) when NC.config.web3formsKey is set; otherwise opens
 * WhatsApp with the message pre-written. See js/data/config.js.
 */
NC.form = (() => {
  const { $ } = NC.dom;
  const form = $("#cf");
  const statusLine = $("#cf-status");
  const submitButton = $("button[type=submit]", form);
  const WEB3FORMS_URL = "https://api.web3forms.com/submit";

  function text() {
    return NC.content[NC.state.lang].form;
  }

  function setStatus(message, kind) {
    statusLine.textContent = message;
    statusLine.dataset.kind = kind || "";
  }

  function readFields() {
    const data = new FormData(form);
    const service = form.elements.service;
    return {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      service: service.options[service.selectedIndex].text.trim(),
      message: String(data.get("message") || "").trim(),
    };
  }

  /** Email through Web3Forms. Throws if the request or the service fails. */
  async function sendByEmail(fields) {
    const payload = {
      access_key: NC.config.web3formsKey,
      subject: text().intro,
      from_name: "New Code website",
      name: fields.name,
      phone: fields.phone,
      service: fields.service,
      message: fields.message,
    };
    if (fields.email) payload.email = fields.email;

    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!response.ok || !result.success) throw new Error(result.message || "send failed");
  }

  /** Fallback: a WhatsApp chat with the message already typed. */
  function openWhatsApp(fields) {
    const t = text();
    const lines = [
      t.intro,
      `${t.name}: ${fields.name}`,
      `${t.phone}: ${fields.phone}`,
      fields.email ? `${t.email}: ${fields.email}` : "",
      `${t.service}: ${fields.service}`,
      `${t.message}: ${fields.message}`,
    ].filter(Boolean);
    const url = `https://wa.me/${NC.config.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (form.elements.botcheck.checked) return; // a bot filled the hidden box

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fields = readFields();
    submitButton.disabled = true;
    setStatus(text().sending, "");

    try {
      if (NC.config.web3formsKey) {
        await sendByEmail(fields);
        setStatus(text().sent, "ok");
      } else {
        openWhatsApp(fields);
        setStatus(text().sentWhatsapp, "ok");
      }
      form.reset();
    } catch (error) {
      setStatus(text().error, "error");
    } finally {
      submitButton.disabled = false;
    }
  }

  form.addEventListener("submit", onSubmit);
  return {};
})();

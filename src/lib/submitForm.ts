// Shared form submission helper for Contact + Book Consultation forms.
//
// Uses Formsubmit.co — a no-signup form backend that only requires the target
// email address. The first submission triggers a one-time confirmation email
// to the recipient; after they click the link, all future submissions are
// delivered to their inbox.
//
// After activation you can optionally replace FORMSUBMIT_RECIPIENT with the
// hashed endpoint (e.g. "el/abc123...") that Formsubmit emails you, to avoid
// exposing the raw address in the shipped JS bundle.

const FORMSUBMIT_RECIPIENT = 'anela@conciergebyanela.com'
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_RECIPIENT}`

export type SubmitFormPayload = Record<string, string | number | boolean>

export async function submitForm(
  data: SubmitFormPayload,
  subject: string
): Promise<void> {
  const body = {
    ...data,
    _subject: subject,
    _template: 'table',
    _captcha: 'true',
  }

  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error(`Form submission failed: ${res.status}`)
  }

  const json = (await res.json()) as { success?: string | boolean }
  const success =
    json.success === true || json.success === 'true' || json.success === 'True'
  if (!success) {
    throw new Error('Form submission returned non-success response')
  }
}

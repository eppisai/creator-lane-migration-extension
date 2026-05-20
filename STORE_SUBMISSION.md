# Chrome Web Store submission packet

Drop-in copy for the Chrome Web Store developer console. Update placeholders marked `<…>` before submitting.

## Listing basics

**Name:** Creator Lane Migration Assistant

**Summary (132 char max):** One-click migration from SuperProfile to Creator Lane. Reads your existing comment-to-DM automations and creates paused campaigns to review.

**Category:** Productivity

**Language:** English

## Detailed description (long copy)

```
Migrate your Instagram comment-to-DM automations from SuperProfile to Creator Lane in one click.

If you've built up 50+ automations on SuperProfile and want to switch to Creator Lane without rebuilding each one by hand, this extension does the work for you.

How it works
1. Install this extension.
2. Open Creator Lane → Dashboard → Migrate.
3. Click Start. A new tab opens at SuperProfile.
4. The extension reads each of your automations (keyword, DM body, the linked post) and posts them to your Creator Lane account.
5. Every imported automation lands as a paused campaign — nothing goes live until you flip it to active.

What this extension reads
- Only pages on superprofile.bio and creatorlanehq.com.
- It reads your own SuperProfile automations using your already-logged-in session. It never sees your password.
- The scraped list is sent only to creatorlanehq.com's API, using your existing Creator Lane login.

What this extension does NOT do
- It does not read Instagram, your email, your Google account, or any site other than the two listed above.
- It does not auto-DM anyone, post anything, or modify your SuperProfile account.

Privacy
Full privacy policy: https://creatorlanehq.com/privacy

Open source
Source code: https://github.com/eppisai/creator-lane-migration-extension
```

## Permissions justification

For each permission the Chrome Web Store review form will ask why you need it. Use these exact phrasings — they pass review faster than vague generalities.

| Permission | Justification |
|---|---|
| `tabs` | Open a tab on the source platform (e.g. superprofile.bio) when the user clicks Start in the Creator Lane dashboard. We close that tab automatically when the migration finishes. |
| `scripting` | Run our migration scraper as a content script on the source platform tab to read the user's own automations. |
| `storage` | Cache the migration adapter configuration (DOM selectors) so we don't re-fetch them on every run. |
| `host_permissions: https://*.superprofile.bio/*` | Required to read the user's own automations on SuperProfile. Read-only. |
| `host_permissions: https://*.creatorlanehq.com/*` | Required to POST the migrated automations to the user's own Creator Lane account, using their existing Creator Lane login. |
| `externally_connectable: creatorlanehq.com` | The Creator Lane dashboard at creatorlanehq.com is what triggers the migration. This permission lets the dashboard send a "begin migration" message to the extension. Without it, the user would have to click the extension toolbar icon manually. |

**Single purpose statement (required):** "Migrate the user's existing comment-to-DM automations from a chosen source platform (SuperProfile) into their Creator Lane account."

## Privacy practices form answers

- **Do you collect personally identifiable information?** No. The extension reads only the user's own automations on a site where they are already logged in, and posts them to their own Creator Lane account. We do not collect, store, or transmit any personally identifiable information independently of that flow.
- **Do you collect health information?** No.
- **Do you collect financial / payment info?** No.
- **Do you collect authentication info?** No. The extension uses the user's existing Creator Lane login (a Bearer token already in their browser) — we don't capture or transmit passwords.
- **Do you collect web history?** No.
- **Do you collect user activity?** Limited — we log which migrations a user started so we can show them their migration history. Stored on the Creator Lane backend, deletable on request.
- **Do you sell or share user data?** No.
- **Do you use the data for purposes unrelated to the single purpose?** No.

## Visibility setting

**Recommended:** Unlisted

Anyone with the install link can install; the listing doesn't show up in Chrome Web Store search. Switch to Public once the matcher has been validated against ManyChat, Stan, and a few more SuperProfile users.

## Required assets

| Asset | Spec | Status |
|---|---|---|
| Extension ZIP | The `extension/dist/` folder, zipped (top-level should be `manifest.json`, not `dist/manifest.json`) | Ready — run `cd extension && npm run build && cd dist && zip -r ../creator-lane-migration-vX.Y.Z.zip .` |
| Store icon (128×128 PNG) | `extension/src/assets/icon-128.png` | ⚠️ Placeholder. Needs real Creator Lane mark. |
| Toolbar icon (16×16) | `extension/src/assets/icon-16.png` | ⚠️ Placeholder. |
| Mid icon (48×48) | `extension/src/assets/icon-48.png` | ⚠️ Placeholder. |
| Screenshot 1 (1280×800 or 640×400) | Should show the dark control banner + visible cursor scraping SuperProfile | Not produced yet |
| Screenshot 2 (1280×800 or 640×400) | Should show the success state — "✓ N campaigns imported (paused)" in the Creator Lane dashboard | Not produced yet |
| Promo tile (440×280) — optional | Brand-aligned card | Not produced yet |

## Submission checklist (post-icon)

```
[ ] Real icons (16/48/128) committed to extension/src/assets/
[ ] Real screenshot pack (1280×800) — banner + cursor + success state
[ ] cd extension && npm run build
[ ] cd extension/dist && zip -r ../creator-lane-migration-vX.Y.Z.zip .
[ ] Submit ZIP via https://chrome.google.com/webstore/devconsole
[ ] Paste copy from the "Detailed description" section above
[ ] Paste permissions justifications above into the review form
[ ] Fill Privacy practices form with answers above
[ ] Set visibility = Unlisted
[ ] Privacy policy URL = https://creatorlanehq.com/privacy
[ ] Submit
[ ] When approved, copy the new extension ID
[ ] Paste ID into frontend/src/app/(dashboard)/dashboard/migrate/page.tsx → KNOWN_EXTENSION_IDS
[ ] Update CHROME_STORE_URL in the same file to the actual store listing URL
[ ] Set SHOW_DEV_PASTE = false in that file
[ ] Tighten backend CORS in app/main.py from regex to specific extension ID
[ ] Deploy frontend + backend
[ ] Update the public extension repo's README to point installs at the new store URL
```

## Reviewer notes (free-text field, optional but helps)

```
This is a one-purpose migration utility for Creator Lane (a Meta Tech Provider for Instagram comment-to-DM automation, available at creatorlanehq.com).

Reviewers can test the full flow:
1. Sign in at https://creatorlanehq.com/signin (free, OAuth via Instagram Business / Creator account).
2. Connect an Instagram Business or Creator account.
3. Visit /dashboard/migrate.
4. The extension is required for the flow to work.

Test SuperProfile account credentials are available on request to a reviewer email — please email contact@creatorlanehq.com.

The extension's source code is available at github.com/eppisai/creator-lane-migration-extension. The backend code that receives the migrated data is at github.com/eppisai/insta_link_please (private; access on request).
```

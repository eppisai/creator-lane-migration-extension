# Creator Lane Migration Extension

One-click migration from **SuperProfile** to **Creator Lane**. Reads your existing comment-to-DM automations and creates paused campaigns in Creator Lane for you to review.

**Time saved:** ~3 seconds per automation instead of ~2 minutes of manual copying.

This is a pre-built Chrome extension — no `npm` or `node` required. Just clone, load, click.

---

## Install (one-time, 60 seconds)

### 1. Clone this repo

```bash
git clone https://github.com/eppisai/creator-lane-migration-extension.git
cd creator-lane-migration-extension
```

### 2. Load the extension in Chrome

1. Open `chrome://extensions` in Chrome (or Brave / Arc / any Chromium browser).
2. Toggle **Developer mode** on (top-right).
3. Click **Load unpacked**.
4. Select the folder you just cloned (the one containing `manifest.json`).
5. You'll see **Creator Lane Migration Assistant** appear in the extension list with a green icon.
6. **Copy the extension ID** — it's the long random string under the extension's name (e.g. `kglphdmoaipohgnkfaocacflbljphmnj`). You'll paste this into Creator Lane in the next step.

### 3. Open Creator Lane and connect the extension

1. Make sure you're logged into [creatorlanehq.com](https://creatorlanehq.com).
2. Go to **Dashboard → Migrate** (or visit [creatorlanehq.com/dashboard/migrate](https://creatorlanehq.com/dashboard/migrate)).
3. If Creator Lane says "Install the migration extension", scroll down to the small **"Dev: loaded the unpacked extension?"** input.
4. Paste the extension ID you copied. Click **Connect**.
5. You should see **✓ Extension v0.5.1 ready**.

---

## Run a migration

1. On the Migrate page, **Migrating from** dropdown should already say **SuperProfile**.
2. Click **Start migration**.
3. A new tab opens at `superprofile.bio`. You'll see a dark banner across the top with the Creator Lane brand mark and *"is now migrating your automations"* in serif italic, plus a visible cursor moving around.
4. **If you're not logged into SuperProfile**, log in. The extension waits and continues automatically.
5. The cursor opens each automation, reads the keyword + DM + caption, and closes it. You can watch the whole thing happen.
6. When done, the tab closes itself. Creator Lane shows: `✓ N campaigns imported (paused)`.
7. Review them at **Dashboard → Campaigns → filter by Paused** before activating.

**Nothing goes live until you say so.** Every imported campaign is created in `paused` status — they only fire after you flip them to active.

---

## How it works

- Your **SuperProfile session** stays in your browser. We never see your SuperProfile password or cookies.
- The extension only runs on `superprofile.bio` and `creatorlanehq.com`. No other sites.
- The scraped automation list is POSTed to Creator Lane's API using your existing Creator Lane login.
- Imported automations are matched to your Instagram posts using the **caption text** that SuperProfile shows — not page screenshots.

Source code mirrors the extension folder of [insta_link_please](https://github.com/eppisai/insta_link_please) (Creator Lane's monorepo). This repo just contains the pre-built distribution.

---

## Troubleshooting

**Creator Lane doesn't see the extension** — make sure you pasted the extension ID into the dashboard's "Dev" input (Step 3 above). Chrome generates a fresh ID per folder path.

**SuperProfile tab opens but nothing happens** — open the SuperProfile tab's devtools console (F12 → Console). If you see `Uncaught SyntaxError: Cannot use import statement outside a module`, you loaded the wrong folder. Make sure the folder you loaded has `manifest.json` AT ITS ROOT — not inside a `dist/` subdirectory.

**Imported campaign points to the wrong Instagram post** — open the campaign in Creator Lane and verify the linked media. If it's wrong, pause/delete it, then email `contact@creatorlanehq.com` with the SuperProfile caption text so we can improve the matcher.

**Only SuperProfile is supported right now.** ManyChat / Stan / Zapier are next. Email `contact@creatorlanehq.com` to prioritize yours.

---

## Privacy + security

- The extension requests permission to read pages on `superprofile.bio` and `creatorlanehq.com` only.
- It does **not** read any other site, your email, your Google account, or your Instagram session directly.
- Scraped data is sent only to `creatorlanehq.com`'s API, using your existing Creator Lane authentication.
- We log the imported payload so we can debug issues — visible to you under **Dashboard → Migrations**.

Source code: see the [insta_link_please](https://github.com/eppisai/insta_link_please) repo, `extension/` directory.

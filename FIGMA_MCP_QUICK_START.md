# Figma MCP Quick Start Guide (With Dev Mode)

Since you now have Figma Dev Mode, here's how to set up MCP in Cursor:

## Step 1: Open Your Figma File
1. Go to [Figma](https://www.figma.com/) and open your design file
2. Make sure you're logged in with your account that has Dev Mode access

## Step 2: Enable Dev Mode
1. In the Figma toolbar at the bottom, click the **"Dev Mode"** toggle (or press `Shift + D`)
2. You should see the inspect panel on the right side

## Step 3: Access MCP Configuration
1. In the **right-hand inspect panel**, look for **"Set up an MCP client"** or **"MCP"** option
2. Click on it to open the MCP configuration menu

## Step 4: Select Cursor
1. In the MCP configuration menu, select **"Cursor"**
2. Click the **"Add"** button

## Step 5: Configure in Cursor
1. This will open Cursor's MCP settings page (or you can manually go to Cursor Settings → MCP)
2. You should see the Figma MCP server option
3. **URL should be:** `https://mcp.figma.com/mcp`
4. Click **"Install"** or **"Connect"**
5. Complete the authentication process with your Figma account

## Step 6: Verify Setup
1. In Cursor, go to Settings → Tools (or MCP Servers)
2. You should see **"Figma"** listed with status "Enabled" or "Ready"
3. It should show something like "8 tools, 1 prompts, 20 resources enabled"

## Step 7: Test It Out
1. In Figma, right-click on any frame/layer
2. Select **"Copy link to selection"**
3. Paste the link in Cursor and ask me to work with that design
4. I'll be able to access the design through MCP!

---

## Troubleshooting

### If you don't see "Set up an MCP client" option:
- Make sure Dev Mode is actually enabled (check the toggle at bottom)
- Try refreshing the Figma page
- Make sure you're on a paid plan with Dev Mode access

### If MCP doesn't connect in Cursor:
- Check that the URL is exactly: `https://mcp.figma.com/mcp`
- Try disconnecting and reconnecting
- Restart Cursor after setup

### If you get rate limit errors:
- You have higher limits with Dev Mode, but there are still per-minute limits
- Wait a minute and try again
- The limits are much higher than the free tier

---

## What You Can Do Now

Once set up, you can:
- Share Figma links and I'll access the design directly
- I can extract colors, typography, spacing automatically
- I can see the exact structure and generate matching code
- No more manual copying of design specs!

---

## Quick Test

After setup, try this:
1. Copy a link to a frame in your Figma file
2. Paste it here and say: "Use this Figma design: [paste link]"
3. I'll access it through MCP and help you implement it!


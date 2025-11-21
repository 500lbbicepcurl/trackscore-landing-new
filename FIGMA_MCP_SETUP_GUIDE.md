# Figma MCP Setup Guide for Cursor

## What is Figma MCP?

Figma MCP (Model Context Protocol) allows AI agents in Cursor to directly access your Figma design files. This enables more accurate code generation that aligns with your designs.

## ⚠️ Important: Dev Mode Pricing

**Dev Mode requires a paid Figma plan:**
- **Starter Plan (Free):** Limited Dev Mode access (basic inspection only)
- **Dev Seat:** $12/month (annual) or $15/month (monthly)
- **Full Seat:** $16/month (annual) or $20/month (monthly)

The MCP server itself is free, but accessing it through Dev Mode requires a paid plan.

## 🆓 Free Alternatives (No Dev Mode Needed)

If you don't have Dev Mode access, here are **completely free** ways to work with Figma designs:

### Option 1: Free Figma Plugins (Recommended)

These plugins work with the **free Figma Starter plan** and don't require Dev Mode:

1. **Figma to Code** (Free & Open Source)
   - Converts designs to HTML/Tailwind or Flutter/SwiftUI
   - Maintains layout integrity
   - Install: Search "Figma to Code" in Figma plugins

2. **Export Kit** (Free)
   - Copy code layer by layer
   - Export to websites, mobile apps, desktop apps
   - Install: Search "Export Kit" in Figma plugins

3. **HtmlGenerator** (Free)
   - Generates HTML + CSS from selections
   - Clean, indented code output
   - Install: Search "HtmlGenerator" in Figma plugins

4. **Structure** (Free)
   - Generates HTML and SASS code
   - Select any object and inspect for code
   - Install: Search "Structure" in Figma plugins

5. **pxCode** (Free)
   - Automated code generation
   - Responsive HTML, CSS, JavaScript
   - Production-ready code
   - Install: Search "pxCode" in Figma plugins

### Option 2: Manual Extraction (100% Free)

1. **Export Assets:**
   - Right-click elements → Export → PNG/SVG
   - Export at 2x or 3x for retina displays

2. **Copy Design Specs:**
   - Select element → Copy hex color from right panel
   - Select text → Copy font family, size, weight
   - Hold Option/Alt → Hover to see spacing measurements

3. **Share with Me:**
   - Share Figma file link (make it viewable)
   - Or share screenshots + design specs
   - I can implement based on that information

### Option 3: Figma API (Free Tier Available)

If you're technical, you can use Figma's REST API:
- Free tier: 2000 requests/month
- No Dev Mode needed
- Access design tokens programmatically

## Setup Steps for Cursor (If You Have Dev Mode)

**Note:** These steps require a paid Figma plan with Dev Mode access.

### Step 1: Open Your Figma Design File
1. Go to [Figma](https://www.figma.com/) and open your design file
2. Make sure you have access to the file (it can be a public link or a file you own)

### Step 2: Enable Dev Mode in Figma
1. In the Figma toolbar at the bottom, toggle to **Dev Mode** (or press `Shift + D`)
2. This enables the MCP configuration options

### Step 3: Access MCP Configuration
1. In the right-hand inspect panel, click on **"Set up an MCP client"**
2. Select **Cursor** from the options
3. Click the **"Add"** button

### Step 4: Configure in Cursor
1. This will open Cursor's MCP settings page
2. Verify the URL is set to: `https://mcp.figma.com/mcp`
3. Click **"Install"** to add the server
4. Click **"Connect"** to authenticate with your Figma account
5. Complete the authentication process

### Step 5: Verify Setup
1. The Figma MCP server should now be enabled in Cursor
2. You can verify it's working by checking Cursor's MCP settings

## How to Use Figma MCP

### Method 1: Copy Link to Selection
1. In Figma, right-click on any frame, component, or layer
2. Select **"Copy link to selection"**
3. Paste this URL in Cursor when asking me to work with your design
4. I'll be able to access the design details and generate code that matches it

### Method 2: Share Figma File URL
1. Copy the URL of your Figma file
2. Share it with me in Cursor
3. I can access the design information through the MCP server

## Usage Limits (Free Tier)

- **Starter Plan / View/Collaborator seats:** Up to 6 tool calls per month
- **Dev/Full seats (Professional/Organization/Enterprise):** Per-minute rate limits (Tier 1 REST API limits)

## Example Usage

Once set up, you can use it like this:

```
"Here's my Figma design: [paste Figma link]
Can you help me implement this component?"
```

Or:

```
"I need to recreate this section from Figma: [paste link]
What colors, spacing, and typography should I use?"
```

## Benefits of MCP (If You Have Dev Mode)

✅ **Free server** - No cost for the remote MCP server itself  
✅ **No desktop app needed** - Works with Figma web  
✅ **Direct design access** - AI can read your exact design specs  
✅ **Accurate code generation** - Code matches your designs perfectly  
✅ **Design tokens extraction** - Colors, typography, spacing automatically extracted

## Benefits of Free Plugins (No Dev Mode Needed)

✅ **100% Free** - Works with free Figma Starter plan  
✅ **No subscription** - No monthly fees  
✅ **Code generation** - Direct HTML/CSS/React code output  
✅ **Easy to use** - Just install plugin and click  
✅ **Multiple formats** - HTML, Tailwind, React Native, Flutter  

## Troubleshooting

If the MCP server isn't working:

1. **Check authentication:** Make sure you're logged into Figma
2. **Verify URL:** Ensure the URL is exactly `https://mcp.figma.com/mcp`
3. **Restart Cursor:** Sometimes a restart helps after initial setup
4. **Check Dev Mode:** Make sure Dev Mode is enabled in Figma
5. **File permissions:** Ensure you have access to the Figma file

## Additional Resources

- [Figma MCP Official Guide](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)
- [Remote MCP Server Setup](https://help.figma.com/hc/en-us/articles/35281350665623-Figma-MCP-collection-How-to-set-up-the-Figma-remote-MCP-server)

---

## Summary: What's Free vs Paid?

| Feature | Free | Paid |
|---------|------|------|
| Figma Starter Plan | ✅ Yes | - |
| Figma Plugins (Export Kit, Figma to Code, etc.) | ✅ Yes | - |
| Manual design extraction | ✅ Yes | - |
| Figma API (2000 req/month) | ✅ Yes | - |
| Dev Mode | ❌ Limited | ✅ Full access ($12-20/month) |
| MCP Server (if you have Dev Mode) | ✅ Yes | - |

## Recommendation

**If you're on a free plan:** Use the free Figma plugins (Figma to Code, Export Kit, etc.) to extract code and design specs, then share that with me in Cursor. This is 100% free and works great!

**If you have a paid plan:** Set up MCP for seamless integration, but the free plugins still work great as alternatives.


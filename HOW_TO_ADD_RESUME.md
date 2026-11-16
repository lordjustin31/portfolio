# How to Add Your Resume PDF

Follow these simple steps to add your actual resume to the portfolio:

## Step 1: Prepare Your Resume

1. Make sure your resume is in **PDF format**
2. Name it: `resume.pdf` (lowercase, no spaces)

## Step 2: Add to Project

### Option A: Using File Explorer
1. Open your portfolio folder: `portfolio/public/`
2. Copy your `resume.pdf` file into the `public` folder
3. That's it!

### Option B: Using Command Line
```bash
cd portfolio/public
# Copy your resume here
copy "C:\path\to\your\resume.pdf" resume.pdf
```

## Step 3: Test It

1. Make sure your dev server is running: `npm run dev`
2. Open your portfolio: http://localhost:3001
3. Click the **Resume** icon or **Download Resume** button
4. Your PDF should download!

## File Structure

```
portfolio/
├── public/
│   ├── resume.pdf          ← Put your resume here
│   ├── next.svg
│   └── vercel.svg
├── app/
├── components/
└── ...
```

## Features That Use Your Resume

Once added, these features will work:

1. **Resume Window** - Click "Resume" icon → Shows PDF viewer
2. **Download Button** - Downloads as "LordJustinBernal_Resume.pdf"
3. **Quick Actions Widget** - "Download Resume" button works
4. **Print Button** - Opens PDF for printing
5. **Open External** - Opens PDF in new tab

## File Name Matters!

The file **must** be named exactly: `resume.pdf`

If you want a different name, update these files:
- `components/apps/ResumeApp.tsx`
- `components/DesktopWidgets.tsx`

Change `/resume.pdf` to `/your-filename.pdf`

## Troubleshooting

**PDF not showing?**
- Make sure the file is in `portfolio/public/` folder
- Make sure it's named `resume.pdf` (lowercase)
- Refresh your browser (Ctrl + Shift + R)
- Check browser console for errors

**Download not working?**
- Clear browser cache
- Make sure the file exists in the public folder
- Try opening http://localhost:3001/resume.pdf directly

## For Production

When you deploy (Vercel/Netlify):
- The `public` folder contents are automatically served
- Your resume will be available at: `yoursite.com/resume.pdf`
- No extra configuration needed!

---

**Done!** Your resume is now integrated into your portfolio. 🎉

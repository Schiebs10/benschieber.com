# Website Content Guide

## How to add your images

I have created specific folders for your images to keep things organized.

### 1. Headshot
- **Folder**: `assets/headshot/`
- **File Name**: `profile.png` (or `profile.jpg` - *Requires updating index.html if you change the extension*)
- **Action**: delete the current `profile.png` and replace it with your own image, renaming it to match.

### 2. Photo Gallery
- **Folder**: `assets/gallery/`
- **File Names**: 
    - `kyoto.jpg` (For the "Sunset in Kyoto" story)
    - `tacos.jpg` (For the "Street Food" story)
    - `mountain.jpg` (For the "Mountain Peak" story)
    
**To add new gallery items:**
1. Drop your new image into `assets/gallery/` (e.g., `my-new-photo.jpg`).
2. Open `gallery.html` in a text editor.
3. Copy one of the `<article>` blocks.
4. Update the image source: `<img src="assets/gallery/my-new-photo.jpg" ...>`.
5. Update the Title, Date, and Story text.

## Editing Text
You can edit the text in `index.html`, `blog.html`, and `gallery.html` by opening them in any text editor (like Notepad, TextEdit, or VS Code) and changing the text between the tags.

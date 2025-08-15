# 🎉 Birthday Website

A beautiful, mobile-friendly birthday website built with Next.js and React. Features swipe navigation that works perfectly on iPhone and other mobile devices.

## ✨ Features

- **Swipe Navigation**: Swipe left/right to navigate between pages
- **Mobile Optimized**: Perfect for iPhone and mobile devices
- **Beautiful Animations**: Smooth transitions between pages
- **Responsive Design**: Works on all screen sizes
- **Touch Friendly**: Optimized for touch interactions

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Adding/Editing Pages

Edit the `birthdayPages` array in `src/app/page.tsx`:

```typescript
const birthdayPages: BirthdayPage[] = [
  {
    id: 1,
    title: "🎉 Happy Birthday! 🎉",
    message: "Your custom message here...",
    backgroundColor: "bg-gradient-to-br from-pink-400 to-purple-500"
  },
  // Add more pages...
];
```

### Background Colors

Use Tailwind CSS gradient classes:
- `bg-gradient-to-br from-pink-400 to-purple-500` - Pink to Purple
- `bg-gradient-to-br from-blue-400 to-cyan-500` - Blue to Cyan
- `bg-gradient-to-br from-green-400 to-teal-500` - Green to Teal
- `bg-gradient-to-br from-yellow-400 to-orange-500` - Yellow to Orange
- `bg-gradient-to-br from-red-400 to-pink-500` - Red to Pink

### Adding Background Images

To add background images to pages:

1. Place your images in the `public/` folder
2. Update the page object to include an image:

```typescript
{
  id: 1,
  title: "🎉 Happy Birthday! 🎉",
  message: "Your message...",
  backgroundColor: "bg-gradient-to-br from-pink-400 to-purple-500",
  backgroundImage: "/your-image.jpg" // Add this line
}
```

3. Update the page rendering to include the background image:

```typescript
<div
  className={`absolute inset-0 ${page.backgroundColor} transition-all duration-700 ease-in-out ${
    index === currentPage
      ? 'opacity-100 scale-100'
      : 'opacity-0 scale-95'
  }`}
  style={{
    backgroundImage: page.backgroundImage ? `url(${page.backgroundImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
```

## 📱 Mobile Features

- **Touch Gestures**: Swipe left/right to navigate
- **No Zoom**: Prevents accidental zooming
- **Full Screen**: Optimized for mobile viewing
- **Smooth Animations**: 60fps transitions

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) - React Framework
- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [react-swipeable](https://github.com/FormidableLabs/react-swipeable) - Swipe Detection

## 📱 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify**: Works great with Next.js
- **AWS Amplify**: Good for AWS users
- **GitHub Pages**: Requires static export

## 🎯 Future Enhancements

- [ ] Background music
- [ ] Confetti animations
- [ ] Photo galleries
- [ ] Custom themes
- [ ] Birthday countdown
- [ ] Social sharing

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Birthday! 🎂✨**

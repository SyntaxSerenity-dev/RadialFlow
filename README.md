# 🎯 CircularMenuLib

> **Professional circular menu library with advanced customization and intelligent UX optimizations**

[![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)](https://github.com/SyntaxSerenity-dev/circular-menu-lib)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Author](https://img.shields.io/badge/author-syntax%20serenity-green.svg)](mailto:fs.developerfullstack@gmail.com)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🚀 Installation](#-installation)
- [📖 Quick Start](#-quick-start)
- [⚙️ Configuration](#️-configuration)
- [🎨 Menu Types](#-menu-types)
- [🎭 Animation Effects](#-animation-effects)
- [📐 Layout Options](#-layout-options)
- [🔧 Advanced Features](#-advanced-features)
- [📱 Practical Examples](#-practical-examples)
- [🎨 Customization](#-customization)
- [📊 Performance](#-performance)
- [🌐 Compatibility](#-compatibility)
- [📝 Changelog](#-changelog)
- [📄 License](#-license)

---

## 🎯 Overview

**CircularMenuLib** is a powerful and flexible JavaScript library for creating beautiful, interactive circular menus with multiple levels of customization. It provides advanced features like automatic viewport adjustment, custom HTML elements, multiple animation effects, and various layout options.

### 🎯 What makes CircularMenuLib special?

- **🎨 Highly Customizable**: Multiple menu types, animation effects, and layout options
- **📐 Smart Positioning**: Automatic viewport adjustment to prevent overflow
- **🔗 Flexible Elements**: Support for custom tags, attributes, and HTML content
- **📱 Responsive**: Optimized for all devices and screen sizes
- **⚡ Performant**: GPU-accelerated animations with intelligent optimizations
- **♿ Accessible**: Keyboard navigation and ARIA attributes support

---

## ✨ Features

### 🎨 Customization

- ✅ **4 Menu Types**: Classic, Labeled, Modern, and Corner
- ✅ **8 Animation Effects**: Clockwise, Counterclockwise, Radial, Scale-Fade, Bounce, Spiral, Wave
- ✅ **9 Layout Options**: Full Circle, Semi-Circle, Quarter Circle, Horizontal/Vertical Lines, Spiral, Side Arc, Radial Line, Floating Grid
- ✅ **Custom HTML Elements**: Use any HTML tag (a, button, div, etc.)
- ✅ **Custom Attributes**: Add IDs, classes, data-attributes, and more
- ✅ **Per-Level Layouts**: Different layouts for each menu level

### 🔧 Advanced Features

- ✅ **Auto Viewport Adjustment**: Automatically prevents items from leaving screen bounds
- ✅ **Smart Position Restoration**: Restores original positions when space is available
- ✅ **Multi-Level Support**: Unlimited nested submenu levels
- ✅ **Pagination**: Handles large menus with navigation controls
- ✅ **Event System**: Customizable callbacks for interactions

### 🚀 Performance

- ✅ **GPU Acceleration** with CSS transforms
- ✅ **Efficient Rendering** with lazy loading
- ✅ **Memory Management** with automatic cleanup
- ✅ **Optimized Animations** with requestAnimationFrame

---

## 🚀 Installation

### 1. Direct Download

```html
<!-- Add CSS -->
<link rel="stylesheet" href="path/to/CircularMenuLib.css" />

<!-- Add JavaScript -->
<script src="path/to/CircularMenuLib.js"></script>
```

### 2. As ES6 Module

```javascript
import CircularMenu from "./CircularMenuLib.js";
```

### 3. Via CDN (when available)

```html
<link rel="stylesheet" href="https://cdn.example.com/CircularMenuLib.css" />
<script src="https://cdn.example.com/CircularMenuLib.js"></script>
```

---

## 📖 Quick Start

### 🎯 Step 1: HTML Setup

```html
<!-- Create a button that will trigger the menu -->
<button id="my-circular-menu">
  <i class="fas fa-plus"></i>
</button>
```

### 🎯 Step 2: JavaScript Initialization

```javascript
// Basic initialization
const menu = new CircularMenu("my-circular-menu", {
  items: [
    {
      icon: "fas fa-home",
      label: "Home",
      submenu: [
        { icon: "fas fa-user", label: "Profile" },
        { icon: "fas fa-cog", label: "Settings" }
      ]
    },
    {
      icon: "fas fa-envelope",
      label: "Messages"
    }
  ]
});
```

### 🎯 Step 3: CSS (Already Included)

The CSS file is automatically injected, but you can customize it as needed.

**🎉 Done!** Your circular menu is now ready to use.

---

## ⚙️ Configuration

### 🔧 Complete Configuration

```javascript
const menu = new CircularMenu("my-menu", {
  // Menu Type
  menuType: CircularMenu.TYPES.CLASSIC, // CLASSIC, LABELED, MODERN, CORNER

  // Layout Configuration
  levelLayouts: [
    CircularMenu.LAYOUTS.FULL_CIRCLE, // Level 1
    CircularMenu.LAYOUTS.SIDE_ARC, // Level 2
    CircularMenu.LAYOUTS.RADIAL_LINE // Level 3
  ],
  submenuLayout: CircularMenu.LAYOUTS.FULL_CIRCLE, // Fallback (deprecated)

  // Items Configuration
  maxVisibleItems: [5, 4, 3], // Max items per level
  items: [], // Array of menu items

  // Animation
  animations: true,
  level1Effect: CircularMenu.EFFECTS.RADIAL,
  adjacentLevelsEffect: CircularMenu.EFFECTS.SPIRAL,

  // Position & Behavior
  openDirection: "right", // right, left, top, bottom
  autoAdjustPosition: false, // Auto-adjust items to viewport
  preventPageScroll: false, // Prevent page scroll when open

  // Interaction
  closeOnClickOutside: false,

  // Callbacks
  onItemClick: (item, level, event) => {
    console.log("Item clicked:", item);
  },
  onSubmenuToggle: (item, level, isOpen) => {
    console.log("Submenu toggled:", item, level, isOpen);
  }
});
```

---

## 🎨 Menu Types

### 1. **Classic** (Default)

Traditional circular menu with gradient buttons and smooth animations.

```javascript
menuType: CircularMenu.TYPES.CLASSIC;
```

### 2. **Labeled**

Menu with text labels displayed below buttons, perfect for clarity.

```javascript
menuType: CircularMenu.TYPES.LABELED;
```

### 3. **Modern**

Contemporary design with purple gradients and modern aesthetics.

```javascript
menuType: CircularMenu.TYPES.MODERN;
```

### 4. **Corner**

Quarter-circle menu perfect for corner positioning.

```javascript
menuType: CircularMenu.TYPES.CORNER;
```

---

## 🎭 Animation Effects

### Available Effects

| Effect             | Description                  | Visual Style           |
| ------------------ | ---------------------------- | ---------------------- |
| `RADIAL`           | Radial expansion with bounce | Energetic, bouncy      |
| `CLOCKWISE`        | Clockwise rotation entrance  | Smooth, circular       |
| `COUNTERCLOCKWISE` | Counterclockwise rotation    | Reverse smooth         |
| `SCALE_FADE`       | Scale with fade blur         | Subtle, elegant        |
| `BOUNCE`           | Elastic bounce effect        | Playful, dynamic       |
| `SPIRAL`           | Spiral rotation entrance     | Dramatic, eye-catching |
| `WAVE`             | Wave-like entrance           | Flowing, natural       |

### Usage

```javascript
const menu = new CircularMenu('my-menu', {
    level1Effect: CircularMenu.EFFECTS.WAVE,
    adjacentLevelsEffect: CircularMenu.EFFECTS.SPIRAL,
    items: [...]
});
```

---

## 📐 Layout Options

### Main Layouts (Any Level)

#### 1. **Full Circle**

Complete 360° circular arrangement (default).

```javascript
levelLayouts: [CircularMenu.LAYOUTS.FULL_CIRCLE];
```

#### 2. **Semi Circle**

180° arc arrangement.

```javascript
levelLayouts: [CircularMenu.LAYOUTS.SEMI_CIRCLE];
```

#### 3. **Quarter Circle**

90° corner arrangement.

```javascript
levelLayouts: [CircularMenu.LAYOUTS.QUARTER_CIRCLE];
```

#### 4. **Horizontal Line**

Linear horizontal arrangement.

```javascript
levelLayouts: [CircularMenu.LAYOUTS.HORIZONTAL_LINE];
```

#### 5. **Vertical Line**

Linear vertical arrangement.

```javascript
levelLayouts: [CircularMenu.LAYOUTS.VERTICAL_LINE];
```

#### 6. **Spiral Out**

Spiraling outward arrangement.

```javascript
levelLayouts: [CircularMenu.LAYOUTS.SPIRAL_OUT];
```

### Submenu-Specific Layouts

#### 7. **Side Arc**

Arc positioned relative to parent item.

```javascript
levelLayouts: [CircularMenu.LAYOUTS.FULL_CIRCLE, CircularMenu.LAYOUTS.SIDE_ARC];
```

#### 8. **Radial Line**

Radial line extending from parent.

```javascript
levelLayouts: [
  CircularMenu.LAYOUTS.FULL_CIRCLE,
  CircularMenu.LAYOUTS.RADIAL_LINE
];
```

#### 9. **Floating Grid**

Grid arrangement relative to parent.

```javascript
levelLayouts: [
  CircularMenu.LAYOUTS.FULL_CIRCLE,
  CircularMenu.LAYOUTS.FLOATING_GRID
];
```

---

## 🔧 Advanced Features

### 🎯 Custom HTML Elements

Create menu items with any HTML tag:

```javascript
{
    tag: 'a', // Use <a> tag instead of <button>
    tagId: 'home-link',
    tagHref: '/home',
    target: '_blank',
    className: 'nav-link',
    tagAttributes: {
        'aria-label': 'Navigate to home',
        'data-track': 'nav-click'
    },
    icon: 'fas fa-home',
    label: 'Home'
}
```

### 📝 Custom HTML Content

Use custom HTML instead of icons:

```javascript
{
    tag: 'button',
    tagHTML: '<span class="custom-content"><i class="fas fa-star"></i> Premium</span>',
    // icon property is ignored when tagHTML is set
    label: 'Premium Feature'
}
```

### 🎨 Per-Level Layouts

Different layouts for each menu level:

```javascript
levelLayouts: [
  CircularMenu.LAYOUTS.SEMI_CIRCLE, // Level 1: Semi-circle
  CircularMenu.LAYOUTS.SIDE_ARC, // Level 2: Side arc
  CircularMenu.LAYOUTS.RADIAL_LINE, // Level 3: Radial line
  CircularMenu.LAYOUTS.FLOATING_GRID // Level 4: Grid
];
```

### 🔄 Auto Viewport Adjustment

Automatically adjust items to stay within viewport:

```javascript
autoAdjustPosition: true, // Enable automatic adjustment

// Items will be repositioned if they go outside viewport
// Original positions are saved and restored when space is available
```

### 📊 Item Structure

Complete item object structure:

```javascript
{
    // Basic Properties
    icon: 'fas fa-icon',           // Icon class (Font Awesome)
    label: 'Item Label',           // Text label

    // HTML Customization
    tag: 'a',                      // HTML tag (button, a, div, etc.)
    tagId: 'item-id',              // Element ID
    className: 'custom-class',      // Additional CSS classes
    tagHref: '/path',              // href attribute (for links)
    target: '_blank',              // target attribute
    rel: 'noopener',               // rel attribute

    // Attributes
    tagAttributes: {               // Custom data-attributes
        'data-category': 'featured',
        'aria-label': 'Description'
    },

    // Content
    tagHTML: '<span>Custom HTML</span>', // Custom HTML content

    // Submenu
    submenu: [                     // Nested items
        { icon: 'fas fa-child', label: 'Child Item' }
    ]
}
```

---

## 📱 Practical Examples

### 🛍️ 1. E-commerce Navigation

```javascript
const shopMenu = new CircularMenu("shop-menu", {
  menuType: CircularMenu.TYPES.MODERN,
  levelLayouts: [
    CircularMenu.LAYOUTS.FULL_CIRCLE,
    CircularMenu.LAYOUTS.FLOATING_GRID
  ],
  items: [
    {
      icon: "fas fa-shopping-bag",
      label: "Products",
      submenu: [
        { icon: "fas fa-tshirt", label: "Clothing" },
        { icon: "fas fa-laptop", label: "Electronics" },
        { icon: "fas fa-book", label: "Books" }
      ]
    },
    {
      icon: "fas fa-shopping-cart",
      label: "Cart",
      tag: "a",
      tagHref: "/cart"
    }
  ]
});
```

### 📄 2. Documentation Menu

```javascript
const docMenu = new CircularMenu("doc-menu", {
  menuType: CircularMenu.TYPES.LABELED,
  levelLayouts: [
    CircularMenu.LAYOUTS.SEMI_CIRCLE,
    CircularMenu.LAYOUTS.SIDE_ARC
  ],
  items: [
    {
      icon: "fas fa-book",
      label: "Getting Started",
      tag: "a",
      tagHref: "#getting-started"
    },
    {
      icon: "fas fa-code",
      label: "API Reference",
      submenu: [
        { icon: "fas fa-cog", label: "Configuration" },
        { icon: "fas fa-palette", label: "Customization" }
      ]
    }
  ]
});
```

### 🎯 3. Quick Actions Menu

```javascript
const actionsMenu = new CircularMenu("actions-menu", {
  menuType: CircularMenu.TYPES.CLASSIC,
  levelLayouts: [CircularMenu.LAYOUTS.QUARTER_CIRCLE],
  openDirection: "bottom-right",
  items: [
    {
      icon: "fas fa-plus",
      label: "New",
      tagAttributes: { "data-action": "create" }
    },
    {
      icon: "fas fa-edit",
      label: "Edit",
      tagAttributes: { "data-action": "edit" }
    },
    {
      icon: "fas fa-trash",
      label: "Delete",
      tagAttributes: { "data-action": "delete" }
    }
  ],
  onItemClick: (item, level, event) => {
    const action = item.tagAttributes?.["data-action"];
    console.log("Action:", action);
  }
});
```

### 🔗 4. Navigation with Links

```javascript
const navMenu = new CircularMenu("nav-menu", {
  items: [
    {
      icon: "fas fa-home",
      label: "Home",
      tag: "a",
      tagHref: "/",
      tagId: "nav-home"
    },
    {
      icon: "fas fa-info",
      label: "About",
      tag: "a",
      tagHref: "/about",
      target: "_self",
      submenu: [
        {
          icon: "fas fa-users",
          label: "Team",
          tag: "a",
          tagHref: "/about/team"
        }
      ]
    }
  ]
});
```

---

## 🎨 Customization

### 🎯 CSS Customization

Override default styles with your own CSS:

```css
/* Custom button colors */
.cmenu-item-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

/* Custom center button */
.cmenu-center-button {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
}

/* Custom animations */
.cmenu-effect-radial {
  animation-duration: 0.8s !important;
}
```

### 📱 Responsive Design

The library is fully responsive. Customize for different screen sizes:

```css
@media (max-width: 768px) {
  .cmenu-center-button {
    width: 60px;
    height: 60px;
  }

  .cmenu-item {
    width: 50px;
    height: 50px;
  }
}
```

---

## 📊 Performance

### 🚀 Automatic Optimizations

- **GPU Acceleration**: Uses CSS transforms for hardware acceleration
- **Efficient Rendering**: Only renders visible items
- **Memory Management**: Automatic cleanup on menu close
- **Smart Positioning**: Calculates positions efficiently

### ⚡ Optimization Tips

#### For Large Menus:

```javascript
// Use pagination with smaller maxVisibleItems
maxVisibleItems: [5, 4, 3];

// Disable animations for better performance
animations: false;
```

#### For Mobile Devices:

```javascript
// Use simpler layouts
levelLayouts: [CircularMenu.LAYOUTS.HORIZONTAL_LINE];

// Reduce animation complexity
level1Effect: CircularMenu.EFFECTS.FADE;
```

---

## 🌐 Compatibility

### ✅ Supported Browsers

| Browser | Minimum Version |
| ------- | --------------- |
| Chrome  | 60+             |
| Firefox | 55+             |
| Safari  | 12+             |
| Edge    | 79+             |
| Opera   | 47+             |

### 🔧 APIs Used

- **CSS Transforms** - Animations and positioning
- **CSS Custom Properties** - CSS variables
- **DOM APIs** - Element manipulation
- **Event APIs** - User interactions

---

## 📝 Changelog

### v2.1.0 (2024-12-19)

- ✨ **Auto Viewport Adjustment**: Smart positioning to prevent overflow
- ✨ **Custom HTML Elements**: Support for any HTML tag and attributes
- ✨ **Custom Content**: `tagHTML` property for custom content
- ✨ **Position Restoration**: Restores original positions when space is available
- ✨ **Enhanced Attributes**: Full control over element attributes
- 🐛 **Bug Fixes**: Improved submenu handling and navigation

### v2.0.0 (2024-09-15)

- 🎉 **Major Update**: Complete rewrite with new architecture
- ✨ **Per-Level Layouts**: Different layouts for each menu level
- ✨ **Multiple Animation Effects**: 7 different animation styles
- ✨ **Enhanced Customization**: More control over appearance and behavior
- ✨ **Better Performance**: Optimized rendering and animations

### v1.0.0 (2024-06-01)

- 🎉 **Initial Release**
- ✨ Basic circular menu functionality
- ✨ Multiple menu types
- ✨ Submenu support

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE.txt) file for details.

### What this means:

- ✅ **Free to use** in personal and commercial projects
- ✅ **Modify** and **distribute** as you wish
- ✅ **Sell** products that include this library
- ⚠️ **Include** the original copyright notice
- 🚫 **No warranty** - use at your own risk

---

## 👨‍💻 Author

**Syntax Serenity**

- 📧 Email: [fs.developerfullstack@gmail.com](mailto:fs.developerfullstack@gmail.com)
- 🌐 Website: [https://syntaxserenity.dev](https://syntaxserenity.dev)
- 🐙 GitHub: [@SyntaxSerenity-dev](https://github.com/SyntaxSerenity-dev)

---

## 🤝 Contributing

1. **Fork** the project
2. **Create** a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📞 Support

For support and questions:

- 📧 **Email**: [fs.developerfullstack@gmail.com](mailto:fs.developerfullstack@gmail.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/SyntaxSerenity-dev/circular-menu-lib/issues)

---

⭐ **If this project helped you, consider giving it a star!**

---

**Made with ❤️ by Syntax Serenity**

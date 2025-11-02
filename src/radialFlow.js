/**
 * 
 * ╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║                                                                                                                   ║
 * ║  ███████╗██╗   ██╗███╗   ██╗████████╗ █████╗ ██╗  ██╗███████╗█████╗██████╗ █████╗███╗   ██╗██╗████████╗██╗   ██╗  ║
 * ║  ██╔════╝╚██╗ ██╔╝████╗  ██║╚══██╔══╝██╔══██╗╚██╗██╔╝██╔════╝██╔══╝██╔══██╗██╔══╝████╗  ██║██║╚══██╔══╝╚██╗ ██╔╝  ║
 * ║  ███████╗ ╚████╔╝ ██╔██╗ ██║   ██║   ███████║ ╚███╔╝ ███████╗█████╗██████╔╝█████╗██╔██╗ ██║██║   ██║    ╚████╔╝   ║
 * ║  ╚════██║  ╚██╔╝  ██║╚██╗██║   ██║   ██╔══██║ ██╔██╗ ╚════██║██╔══╝██╔══██╗██╔══╝██║╚██╗██║██║   ██║     ╚██╔╝    ║
 * ║  ███████║   ██║   ██║ ╚████║   ██║   ██║  ██║██╔╝ ██╗███████║█████╗██║  ██║█████╗██║ ╚████║██║   ██║      ██║     ║
 * ║  ╚══════╝   ╚═╝   ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚════╝╚═╝  ╚═╝╚════╝╚═╝  ╚═══╝╚═╝   ╚═╝      ╚═╝     ║
 * ║                                R E L I A B I L I T Y   I N   E V E R Y   L I N E                                  ║
 * ║                                              O F   C O D E                                                        ║
 * ║                                                                                                                   ║
 * ╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 * 
 * File: radialFlow.js
 * Description: 
 *
 *     Professional circular menu library with advanced customization and intelligent UX optimizations. Provides powerful
 *  and flexible framework for creating interactive circular menus with multiple levels of nesting, custom HTML elements,
 *  intelligent viewport adjustment, and extensive layout options. Features GPU-accelerated animations, automatic position
 *  adjustment to prevent viewport overflow, support for custom attributes and tags, and comprehensive event handling for
 *  optimal user experience across all devices and screen sizes.
 * 
 *  Key Features:
 * 
 *  - Multiple menu types: Classic, Labeled, Modern, and Corner layouts
 *  - Seven animation effects: Clockwise, Counterclockwise, Radial, Scale-Fade, Bounce, Spiral, Wave
 *  - Nine layout options: Full Circle, Semi-Circle, Quarter Circle, Horizontal/Vertical Lines, Spiral, Side Arc,
 *  - Radial Line, Floating Grid Per-level layout configuration for unlimited menu depth
 *  - Custom HTML element support (any tag type: button, anchor, div, etc.)
 *  - Comprehensive attribute control: IDs, classes, data-attributes, href, target, rel
 *  - Custom HTML content injection with tagHTML property
 *  - Automatic viewport adjustment to prevent overflow
 *  - Smart position restoration when viewport space becomes available
 *  - Multi-level submenu support with unlimited nesting
 *  - Pagination system for large menu sets
 *  - GPU-accelerated CSS transforms for smooth animations
 *  - Event system with customizable callbacks
 *  - Memory-efficient rendering with lazy loading
 * 
 * Structure:
 *
 *  - Configuration Management (default options, validation, normalization)
 *  - Menu Types System (Classic, Labeled, Modern, Corner)
 *  - Animation Effects Engine (seven predefined effects with customizable delays)
 *  - Layout Calculation System (nine layout algorithms for flexible positioning)
 *  - Viewport Adjustment Engine (automatic overflow prevention and position restoration)
 *  - Item Creation System (custom HTML elements, attributes, and content)
 *  - Event Handling (click events, submenu toggling, navigation)
 *  - State Management (menu state, active submenus, page tracking)
 *  - CSS Auto-Injection (automatic stylesheet loading)
 *
 * Dependencies: 
 * 
 *  - DOM APIs (document.createElement, getElementById, addEventListener)
 *  - CSS Transforms and Transitions (for animations and positioning)
 *  - requestAnimationFrame (for viewport adjustment timing)
 *  - CSS Custom Properties (for dynamic styling)
 *  - Font Awesome (optional, for icon support)
 * 
 * @description Professional circular menu library with advanced customization and intelligent UX optimizations
 * @version 2.1.9
 * @author Syntax Serenity <fs.developerfullstack@gmail.com>
 * @license MIT
 * @copyright 2025 Syntax Serenity
 * @repository https://github.com/SyntaxSerenity-dev/circular-menu-lib
 * @website https://syntaxserenity.dev
 * 
 * Released under the MIT License - see LICENSE file for details
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
*/

(function(global) {
 'use strict';
    
 // Auto-inject CSS if not already loaded
 const CSS_ID = 'circular-menu-lib-styles';
 const CSS_PATH = 'radialFlow.css';
    
 /**
     * PURPOSE OF THE FUNCTION: Automatically injects the required CSS stylesheet into the document head if not already present.
     * DESCRIPTION:
     *    - Checks if the stylesheet with the specified ID already exists in the document
     *    - Creates a new link element with the required attributes (id, rel, href)
     *    - Appends the stylesheet link to the document head
     *    - Prevents duplicate stylesheet injection through ID checking
     * 
     * DEPENDENCIES:
     *    - document.getElementById() - DOM API for element retrieval
     *    - document.createElement() - DOM API for element creation
     *    - document.head.appendChild() - DOM API for element insertion
     * 
     * @return {void} Function does not return a value
     * 
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
     * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
     * @author Syntax Serenity <fs.developerfullstack@gmail.com>
 */
 function injectCSS() {
     if (document.getElementById(CSS_ID)) return;
     const link = document.createElement('link');
     link.id = CSS_ID;
     link.rel = 'stylesheet';
     link.href = CSS_PATH;
     document.head.appendChild(link);
 }

 /**
     * Menu Types Configuration
     * Defines available menu type constants for visual styling and behavior variations.
     * Each type provides distinct visual appearance and interaction patterns.
     * 
     * @constant {Object} MENU_TYPES
     * @property {string} CLASSIC - Traditional circular menu with gradient buttons and smooth animations
     * @property {string} LABELED - Menu with text labels displayed below buttons for clarity
     * @property {string} MODERN - Contemporary design with purple gradients and modern aesthetics
     * @property {string} CORNER - Quarter-circle menu optimized for corner positioning
 */
 const MENU_TYPES = {
     CLASSIC: 'classic',
     LABELED: 'labeled',
     MODERN: 'modern',
     CORNER: 'corner'
 };

 /**
     * Animation Effects Configuration
     * Defines available animation effect constants for menu item entrance animations.
     * Each effect provides unique visual style and timing characteristics.
     * 
     * @constant {Object} ANIMATION_EFFECTS
     * @property {string} CLOCKWISE - Clockwise rotation entrance animation
     * @property {string} COUNTERCLOCKWISE - Counterclockwise rotation entrance animation
     * @property {string} RADIAL - Radial expansion with elastic bounce effect
     * @property {string} SCALE_FADE - Scale with fade blur effect for subtle appearance
     * @property {string} BOUNCE - Elastic bounce effect with playful dynamics
     * @property {string} SPIRAL - Spiral rotation entrance with dramatic effect
     * @property {string} WAVE - Wave-like entrance with flowing natural motion
 */
 const ANIMATION_EFFECTS = {
     CLOCKWISE: 'clockwise',
     COUNTERCLOCKWISE: 'counterclockwise',
     RADIAL: 'radial',
     SCALE_FADE: 'scale-fade',
     BOUNCE: 'bounce',
     SPIRAL: 'spiral',   
     WAVE: 'wave'        
 };

 /**
     * Menu Layouts Configuration
     * Defines available layout constants for menu item positioning algorithms.
     * Includes both general-purpose layouts and submenu-specific layouts.
     * 
     * @constant {Object} MENU_LAYOUTS
     * @property {string} FULL_CIRCLE - Complete 360° circular arrangement (default)
     * @property {string} SEMI_CIRCLE - 180° arc arrangement
     * @property {string} QUARTER_CIRCLE - 90° corner arrangement
     * @property {string} HORIZONTAL_LINE - Linear horizontal arrangement
     * @property {string} VERTICAL_LINE - Linear vertical arrangement
     * @property {string} SPIRAL_OUT - Spiraling outward arrangement
     * @property {string} SIDE_ARC - Arc positioned relative to parent item (submenus)
     * @property {string} RADIAL_LINE - Radial line extending from parent item (submenus)
     * @property {string} FLOATING_GRID - Grid arrangement relative to parent item (submenus)
 */
 const MENU_LAYOUTS = {
     FULL_CIRCLE: 'full-circle',
     SEMI_CIRCLE: 'semi-circle',
     QUARTER_CIRCLE: 'quarter-circle',
     HORIZONTAL_LINE: 'horizontal-line',
     VERTICAL_LINE: 'vertical-line',
     SPIRAL_OUT: 'spiral-out',
     SIDE_ARC: 'side-arc',
     RADIAL_LINE: 'radial-line',
     FLOATING_GRID: 'floating-grid'
 };
    
 /**
     * Submenu Layouts Compatibility Constant
     * Maintained for backward compatibility with deprecated submenuLayout property.
     * Points to MENU_LAYOUTS object to ensure existing code continues to work.
     * 
     * @constant {Object} SUBMENU_LAYOUTS
     * @deprecated Use MENU_LAYOUTS directly. This constant is maintained for compatibility only.
 */
 const SUBMENU_LAYOUTS = MENU_LAYOUTS;

 /**
     * Default Configuration Object
     * Defines default values for all menu configuration options.
     * These values are merged with user-provided configuration in the constructor.
     * 
     * @constant {Object} DEFAULT_CONFIG
     * @property {string} menuType - Default menu type (CLASSIC)
     * @property {Array<string>|null} levelLayouts - Per-level layout configuration array (null = use fallback)
     * @property {string|null} submenuLayout - Fallback layout for submenus (deprecated, use levelLayouts)
     * @property {Array<number>} maxVisibleItems - Maximum visible items per level [5]
     * @property {Array<Object>} items - Empty array of menu items
     * @property {string} openDirection - Menu opening direction: 'right', 'left', 'top', 'bottom'
     * @property {Function|null} onItemClick - Callback function for item click events
     * @property {Function|null} onSubmenuToggle - Callback function for submenu toggle events
     * @property {boolean} animations - Enable/disable animation effects
     * @property {boolean} closeOnClickOutside - Close menu when clicking outside
     * @property {string} level1Effect - Animation effect for first level menu (RADIAL)
     * @property {string} adjacentLevelsEffect - Animation effect for submenu levels (RADIAL)
     * @property {boolean} autoAdjustPosition - Automatically adjust items to prevent viewport overflow (default: false)
     * @property {boolean} preventPageScroll - Prevent page scrolling when menu is open (default: false)
 */
 const DEFAULT_CONFIG = {
     menuType: MENU_TYPES.CLASSIC,
     levelLayouts: null,
     submenuLayout: null,
     maxVisibleItems: [5],
     items: [],
     openDirection: 'right',
     onItemClick: null,
     onSubmenuToggle: null,
     animations: true,
     closeOnClickOutside: false,
     level1Effect: ANIMATION_EFFECTS.RADIAL,
     adjacentLevelsEffect: ANIMATION_EFFECTS.RADIAL,
     autoAdjustPosition: false,
     labelHover:true,
     preventPageScroll: false
 };

 /**
     * PURPOSE OF THE CLASS: Provides a comprehensive circular menu system with advanced customization capabilities.
     * DESCRIPTION:
     *    - Creates and manages interactive circular menus with configurable layouts, animations, and behaviors
     *    - Handles multi-level nested submenus with independent layout configurations per level
     *    - Supports custom HTML elements, attributes, and content for maximum flexibility
     *    - Implements intelligent viewport adjustment to prevent menu items from leaving screen bounds
     *    - Manages menu state, pagination, navigation, and event handling
     *    - Provides GPU-accelerated animations with multiple effect options
     *    - Handles automatic CSS injection and DOM structure creation
     * 
     * KEY CAPABILITIES:
     *    - Multiple menu types (Classic, Labeled, Modern, Corner)
     *    - Per-level layout configuration for unlimited menu depth
     *    - Custom HTML element support (button, anchor, div, etc.)
     *    - Comprehensive attribute management (IDs, classes, data-attributes)
     *    - Viewport-aware positioning with automatic adjustment
     *    - Smart position restoration when viewport space becomes available
     *    - Multi-level submenu support with unlimited nesting
     *    - Pagination system for large menu sets
     *    - Event system with customizable callbacks
     * 
     * ARCHITECTURE:
     *    - State Management: Tracks menu open/close state, active submenus, rendered elements, page navigation
     *    - Layout System: Calculates positions for nine different layout algorithms
     *    - Rendering Engine: Creates DOM elements with custom attributes and handles animation application
     *    - Viewport Engine: Monitors and adjusts item positions to prevent overflow
     *    - Event System: Handles user interactions, callbacks, and menu state transitions
     * 
     * @class CircularMenu
     * @author Syntax Serenity <fs.developerfullstack@gmail.com>
 */
 class CircularMenu {
     /**
         * PURPOSE OF THE CONSTRUCTOR: Initializes a new CircularMenu instance with the specified button element and configuration.
         * DESCRIPTION:
         *    - Validates that the target button element exists in the DOM
         *    - Merges user configuration with default settings
         *    - Initializes internal state management structures (Maps for elements and data)
         *    - Injects required CSS stylesheet if not already loaded
         *    - Normalizes configuration arrays (maxVisibleItems, levelLayouts) to match menu depth
         *    - Generates unique menu identifier for DOM element targeting
         *    - Sets up DOM structure and event listeners
         * 
         * DEPENDENCIES:
         *    - injectCSS() - Ensures stylesheet is loaded
         *    - normalizeMaxVisibleItems() - Validates and normalizes item count configuration
         *    - normalizeLevelLayouts() - Validates and normalizes layout configuration
         *    - wrapButton() - Creates DOM container structure
         *    - attachEventListeners() - Sets up user interaction handlers
         * 
         * @param {string} buttonId - The DOM ID of the button element that will trigger the menu
         * @param {Object} config - Configuration object to override default settings
         * @param {string} config.menuType - Menu type: 'classic', 'labeled', 'modern', or 'corner'
         * @param {Array<string>} config.levelLayouts - Array of layout names for each menu level
         * @param {Array<number>} config.maxVisibleItems - Array of maximum visible items per level
         * @param {Array<Object>} config.items - Array of menu item objects with icon, label, submenu, etc.
         * @param {string} config.openDirection - Menu opening direction: 'right', 'left', 'top', 'bottom'
         * @param {Function} config.onItemClick - Callback function executed when menu item is clicked
         * @param {Function} config.onSubmenuToggle - Callback function executed when submenu is toggled
         * @param {boolean} config.animations - Enable/disable animation effects
         * @param {boolean} config.closeOnClickOutside - Close menu when clicking outside
         * @param {string} config.level1Effect - Animation effect for first level menu
         * @param {string} config.adjacentLevelsEffect - Animation effect for submenu levels
         * @param {boolean} config.autoAdjustPosition - Automatically adjust items to prevent viewport overflow
         * @param {boolean} config.preventPageScroll - Prevent page scrolling when menu is open
         * 
         * @throws {Error} Throws error if button element with specified ID is not found
         * @return {CircularMenu} Returns the CircularMenu instance for method chaining
         * 
         * @link https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     constructor(buttonId, config = {}) {
         injectCSS(); 
         this.buttonElement = document.getElementById(buttonId);
         
         if (!this.buttonElement) {
             throw new Error(`Element with id "${buttonId}" not found`);
         } 
         this.config = { ...DEFAULT_CONFIG, ...config };
         this.originalButtonHTML = this.buttonElement.outerHTML;
         
         this.state = {
             isOpen: false,
             currentPages: {},
             activeSubmenus: [],
             renderedElements: new Map(),
             levelData: new Map(),
             savedScrollY: undefined,
             savedScrollX: undefined,
             originalPositions: new Map() // Armazena posições originais dos itens
         };
         this.normalizeMaxVisibleItems();
         this.menuId = `cmenu-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
         
         this.init();
     }  

     /**
         * PURPOSE OF THE METHOD: Normalizes the maxVisibleItems array to match the menu's depth level structure.
         * DESCRIPTION:
         *    - Calculates the maximum depth of the menu structure by traversing all items and submenus
         *    - Ensures maxVisibleItems array length matches the number of menu levels
         *    - Pads array with last value if shorter than required depth
         *    - Truncates array if longer than required depth
         *    - Initializes page tracking for each level in the state
         * 
         * DEPENDENCIES:
         *    - getMaxLevels() - Recursively calculates menu depth
         * 
         * @return {void} Method modifies this.config.maxVisibleItems and this.state.currentPages
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     normalizeMaxVisibleItems() {
         const levels = this.getMaxLevels(this.config.items);
         const maxItems = this.config.maxVisibleItems; 
         if (maxItems.length === 0) {
             this.config.maxVisibleItems = Array(levels).fill(5);
         } else if (maxItems.length < levels) {
             const lastValue = maxItems[maxItems.length - 1];
             this.config.maxVisibleItems = [
                 ...maxItems,
                 ...Array(levels - maxItems.length).fill(lastValue)
             ];
         } else if (maxItems.length > levels) {
             this.config.maxVisibleItems = maxItems.slice(0, levels);
         } 
         for (let i = 0; i < levels; i++) {
             this.state.currentPages[i] = 0;
         }
     }
        
     /**
         * PURPOSE OF THE METHOD: Normalizes the levelLayouts array to ensure proper layout configuration for each menu level.
         * DESCRIPTION:
         *    - Calculates the maximum depth of the menu structure
         *    - If levelLayouts is undefined or empty, uses fallback logic (submenuLayout or FULL_CIRCLE)
         *    - Ensures level 0 always defaults to FULL_CIRCLE if not specified
         *    - Pads array with last layout value if shorter than required depth
         *    - Truncates array if longer than required depth
         *    - Maintains backward compatibility with deprecated submenuLayout property
         * 
         * DEPENDENCIES:
         *    - getMaxLevels() - Recursively calculates menu depth
         *    - MENU_LAYOUTS.FULL_CIRCLE - Default layout constant
         * 
         * @return {void} Method modifies this.config.levelLayouts array
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     normalizeLevelLayouts() {
         const levels = this.getMaxLevels(this.config.items);
         
         // Se levelLayouts não foi definido, usar fallback
         if (!this.config.levelLayouts || this.config.levelLayouts.length === 0) {
             // Usar submenuLayout como fallback para compatibilidade
             const fallbackLayout = this.config.submenuLayout || MENU_LAYOUTS.FULL_CIRCLE;
             this.config.levelLayouts = [MENU_LAYOUTS.FULL_CIRCLE]; // Nível 0 sempre full-circle por padrão
             
             // Preencher níveis restantes
             for (let i = 1; i < levels; i++) {
                 this.config.levelLayouts.push(fallbackLayout);
             }
         } else {
             // Normalizar array de layouts
             const layouts = [...this.config.levelLayouts];
             
             if (layouts.length < levels) {
                 const lastLayout = layouts[layouts.length - 1] || MENU_LAYOUTS.FULL_CIRCLE;
                 while (layouts.length < levels) {
                     layouts.push(lastLayout);
                 }
             }
             
             this.config.levelLayouts = layouts.slice(0, levels);
         }
     }

     /**
         * PURPOSE OF THE METHOD: Recursively calculates the maximum depth level of the menu structure.
         * DESCRIPTION:
         *    - Traverses the menu items array recursively
         *    - Increments level counter for each submenu found
         *    - Returns the deepest level found in the entire menu structure
         *    - Used for normalizing configuration arrays to match menu depth
         * 
         * @param {Array<Object>} items - Array of menu item objects to traverse
         * @param {number} currentLevel - Current depth level (default: 1 for root level)
         * @return {number} The maximum depth level found in the menu structure
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     getMaxLevels(items, currentLevel = 1) {
         let maxLevel = currentLevel;
          for (const item of items) {
              if (item.submenu && item.submenu.length > 0) {
                  const subLevel = this.getMaxLevels(item.submenu, currentLevel + 1);
                  maxLevel = Math.max(maxLevel, subLevel);
              }
          }
          
          return maxLevel;
     } 
        
     /**
         * PURPOSE OF THE METHOD: Initializes the menu by setting up DOM structure and event listeners.
         * DESCRIPTION:
         *    - Creates the container wrapper around the trigger button
         *    - Sets up all event listeners for user interactions
         *    - Normalizes layout configurations for all menu levels
         *    - Called automatically by constructor after configuration normalization
         * 
         * DEPENDENCIES:
         *    - wrapButton() - Creates DOM structure
         *    - attachEventListeners() - Sets up interaction handlers
         *    - normalizeLevelLayouts() - Validates layout configuration
         * 
         * @return {void} Method sets up DOM structure and events
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     init() {
         this.wrapButton();
         this.attachEventListeners();
         this.normalizeLevelLayouts();
     } 

     /**
         * PURPOSE OF THE METHOD: Wraps the trigger button and creates the menu container structure.
         * DESCRIPTION:
         *    - Creates container div element with menu type and unique ID classes
         *    - Inserts container before button element in DOM
         *    - Adds CSS classes to button element for styling
         *    - Creates and injects icon element if not already present
         *    - Creates menu wrapper div for menu items
         *    - Stores references to container and wrapper for later use
         * 
         * DEPENDENCIES:
         *    - document.createElement() - DOM API for element creation
         *    - Node.insertBefore() - DOM API for element insertion
         *    - Element.appendChild() - DOM API for element appending
         * 
         * @return {void} Method creates DOM structure and stores element references
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     wrapButton() {
         const container = document.createElement('div');
         container.className = `cmenu-container cmenu-type-${this.config.menuType}`;
         container.id = this.menuId;
         
         this.buttonElement.parentNode.insertBefore(container, this.buttonElement);
         
         this.buttonElement.classList.add('cmenu-center-button');
         this.buttonElement.classList.add(`cmenu-type-${this.config.menuType}`);
         
         if (!this.buttonElement.querySelector('.cmenu-center-icon')) {
             const icon = document.createElement('i');
             icon.className = 'fas fa-plus cmenu-center-icon';
             this.buttonElement.appendChild(icon);
         } else {
             this.buttonElement.querySelector('i, svg').classList.add('cmenu-center-icon');
         }
         
         container.appendChild(this.buttonElement);
         
         const menuWrapper = document.createElement('div');
         menuWrapper.className = 'cmenu-circular-menu';
         menuWrapper.id = `${this.menuId}-menu`;
         container.appendChild(menuWrapper);
         
         this.menuContainer = container;
         this.menuWrapper = menuWrapper;
     } 

     attachEventListeners() {
         this.buttonElement.addEventListener('click', (e) => {
             e.stopPropagation();
             this.toggleMenu();
         }); 
         if (this.config.closeOnClickOutside) {
             document.addEventListener('click', (e) => {
                 if (this.state.isOpen && 
                     !this.menuContainer.contains(e.target)) {
                     this.closeMenu();
                 }
             });
         }
         
         // Adicionar eventos de hover para verificar se pode restaurar posições
         if (this.config.autoAdjustPosition) {
             this.buttonElement.addEventListener('mouseenter', () => {
                 this.checkAndRestorePositions();
             });
             
             this.menuContainer.addEventListener('mouseenter', () => {
                 this.checkAndRestorePositions();
             });
         }
     }

     toggleMenu() {
         if (this.state.isOpen) {
             this.closeMenu();
         } else {
             this.openMenu();
         }
     } 

     /**
         * PURPOSE OF THE METHOD: Opens the menu and renders the first level of items.
         * DESCRIPTION:
         *    - Sets menu state to open
         *    - Applies active CSS classes to button and container
         *    - Enables page scroll prevention if configured
         *    - Renders the root level (level 0) menu items
         * 
         * DEPENDENCIES:
         *    - renderLevel() - Creates and displays menu items
         *    - preventPageScroll() - Locks page scroll if enabled
         * 
         * @return {void} Method modifies state and renders menu
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     openMenu() {
         this.state.isOpen = true;
         this.buttonElement.classList.add('cmenu-active');
         this.menuContainer.classList.add('cmenu-open');
         
         // Prevenir scroll da página se configurado
         if (this.config.preventPageScroll) {
             this.preventPageScroll(true);
         }
         
         this.renderLevel(0, this.config.items, null);
     }

     /**
         * PURPOSE OF THE METHOD: Closes the menu and cleans up rendered elements.
         * DESCRIPTION:
         *    - Sets menu state to closed
         *    - Removes active CSS classes from button and container
         *    - Clears all rendered menu levels from DOM
         *    - Resets active submenus array
         *    - Resets page tracking for all levels
         *    - Removes navigation arrows if present
         *    - Restores page scroll if it was prevented
         * 
         * DEPENDENCIES:
         *    - clearAllLevels() - Removes all menu elements
         *    - removeNavigationArrows() - Cleans up navigation controls
         *    - preventPageScroll() - Restores scroll if enabled
         * 
         * @return {void} Method cleans up DOM and resets state
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     closeMenu() {
         this.state.isOpen = false;
         this.buttonElement.classList.remove('cmenu-active');
         this.menuContainer.classList.remove('cmenu-open');
         this.clearAllLevels();
         this.state.activeSubmenus = [];
         Object.keys(this.state.currentPages).forEach(key => {
             this.state.currentPages[key] = 0;
         });
         
         this.removeNavigationArrows();
         
         // Restaurar scroll da página se estava bloqueado
         if (this.config.preventPageScroll) {
             this.preventPageScroll(false);
         }
     }

     clearAllLevels() {
         const levels = this.menuWrapper.querySelectorAll('.cmenu-level');
         levels.forEach(level => level.remove());
         this.state.renderedElements.clear();
         this.state.levelData.clear();
         // Limpar posições originais quando fechar o menu
         if (!this.state.isOpen) {
             this.state.originalPositions.clear();
         }
     }
    
     /**
         * PURPOSE OF THE METHOD: Renders a menu level with items, positions them, and applies animations.
         * DESCRIPTION:
         *    - Calculates pagination for large item sets based on maxVisibleItems configuration
         *    - Creates level container element with appropriate CSS classes and layout configuration
         *    - Calculates positions for all slots including navigation buttons
         *    - Renders prev button in first position if needed
         *    - Renders menu items in intermediate positions
         *    - Renders next button in last position if needed
         *    - Applies animation effects to menu items
         *    - Stores rendered elements and level data in state management structures
         *    - Triggers viewport adjustment if autoAdjustPosition is enabled
         *    - Updates navigation arrows for corner menu type if needed
         * 
         * DEPENDENCIES:
         *    - calculatePositions() - Calculates item positions based on layout algorithm
         *    - createMenuItem() - Creates DOM element for each menu item
         *    - createNavButton() - Creates navigation button elements
         *    - applyAnimationEffect() - Applies CSS animation classes
         *    - adjustItemsToViewport() - Adjusts positions to prevent overflow
         * 
         * @param {number} level - The menu level index (0 for root, 1+ for submenus)
         * @param {Array<Object>} items - Array of menu item objects to render
         * @param {Object|null} parentPos - Position object {x, y} of parent item for relative layouts
         * @return {void} Method creates DOM elements and appends them to menu wrapper
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     renderLevel(level, items, parentPos = null) {
          const maxVisible = this.config.maxVisibleItems[level] || 5;
          const currentPage = this.state.currentPages[level] || 0;
         const totalItems = items.length;
         
         // Se não há itens, não renderiza nada
         if (totalItems === 0) return;
         
         const needsNav = totalItems > maxVisible;
         
         // Calcular quantos itens foram mostrados nas páginas anteriores
         let itemsShownBefore = 0;
         let slotsUsedBefore = 0;
         
         // Calcular acumulado de itens mostrados nas páginas anteriores
         for (let page = 0; page < currentPage; page++) {
             let pageSlots = maxVisible;
             
             // Verificar quantos botões existiam naquela página
             const pageHasNext = this.calculateHasNext(items, page, maxVisible, slotsUsedBefore);
             const pageHasPrev = page > 0;
             
             if (pageHasNext && pageHasPrev) {
                 pageSlots -= 2; // Dois botões (next e prev)
             } else if (pageHasNext || pageHasPrev) {
                 pageSlots -= 1; // Um botão (next ou prev)
             }
             
             slotsUsedBefore += pageSlots;
             itemsShownBefore += pageSlots;
         }
         
         // Calcular quantos itens mostrar nesta página
          let availableSlots = maxVisible;
         const hasNext = this.calculateHasNext(items, currentPage, maxVisible, itemsShownBefore);
         const hasPrev = currentPage > 0;
          
          if (needsNav && this.config.menuType !== MENU_TYPES.CORNER) {
             if (hasNext && hasPrev) {
                 availableSlots -= 2;
             } else if (hasNext || hasPrev) {
                 availableSlots -= 1;
          }
         }
         
         // Calcular índice inicial e final dos itens a mostrar
         const startIndex = itemsShownBefore;
         const endIndex = Math.min(startIndex + availableSlots, totalItems);
         const visibleItems = items.slice(startIndex, endIndex);
          
          const levelContainer = document.createElement('div');
          levelContainer.className = `cmenu-level cmenu-level-${level}`;
          levelContainer.dataset.level = level;
          
          // Adicionar classe de layout específico do nível
          const levelLayout = this.config.levelLayouts[level] || MENU_LAYOUTS.FULL_CIRCLE;
          levelContainer.classList.add(`cmenu-layout-${levelLayout}`);
          
          // Calcular posições totais incluindo os botões de navegação
          const totalSlots = maxVisible;
          const positions = this.calculatePositions(level, totalSlots, maxVisible, parentPos);
          
          // Determinar o efeito de animação
          const effect = level === 0 ? this.config.level1Effect : this.config.adjacentLevelsEffect;
          
          // Renderizar botão prev se necessário (na primeira posição)
          if (needsNav && hasPrev && this.config.menuType !== MENU_TYPES.CORNER) {
              const prevButton = this.createNavButton('prev', level, items, 0, positions);
              levelContainer.appendChild(prevButton);
          }
          
          // Calcular offset inicial para os itens (pular posição 0 se tiver prev)
          const startPositionIndex = (needsNav && hasPrev && this.config.menuType !== MENU_TYPES.CORNER) ? 1 : 0;
          
          // Renderizar itens nas posições intermediárias
          visibleItems.forEach((item, index) => {
              const positionIndex = startPositionIndex + index;
              const itemElement = this.createMenuItem(item, level, positions[positionIndex]);
              
              // Aplicar animação baseada no efeito escolhido
              if (this.config.animations) {
                  this.applyAnimationEffect(itemElement, effect, index, visibleItems.length);
              }
              
              levelContainer.appendChild(itemElement);
          });
          
          // Renderizar botão next se necessário (na última posição)
          if (needsNav && hasNext && this.config.menuType !== MENU_TYPES.CORNER) {
              const nextPositionIndex = maxVisible - 1;
              const nextButton = this.createNavButton('next', level, items, nextPositionIndex, positions);
              levelContainer.appendChild(nextButton);
          }
          
          this.menuWrapper.appendChild(levelContainer);
          this.state.renderedElements.set(level, levelContainer);
          this.state.levelData.set(level, { items, maxVisible });
          
          // Ajustar posições após renderização para prevenir overflow (apenas se autoAdjustPosition estiver ativo)
          if (this.config.autoAdjustPosition) {
              requestAnimationFrame(() => {
                  this.adjustItemsToViewport(levelContainer);
              });
          }
          
          if (this.config.menuType === MENU_TYPES.CORNER && needsNav) {
              setTimeout(() => this.updateNavigationArrows(level), 50);
          }
      }

     /**
         * PURPOSE OF THE METHOD: Applies CSS animation effects to menu items with appropriate timing delays.
         * DESCRIPTION:
         *    - Removes any existing animation effect classes from the element
         *    - Determines animation delay based on item index and total count
         *    - Adds appropriate CSS class for the selected animation effect
         *    - Sets animationDelay style property for staggered animation timing
         *    - Supports seven different animation effects with unique timing curves
         * 
         * DEPENDENCIES:
         *    - Element.classList.remove() - DOM API for class removal
         *    - Element.classList.add() - DOM API for class addition
         *    - Element.style.animationDelay - CSS property for timing control
         *    - CSS animation classes defined in stylesheet
         * 
         * @param {HTMLElement} itemElement - The menu item element to animate
         * @param {string} effect - Animation effect name (clockwise, counterclockwise, radial, etc.)
         * @param {number} index - Item index in the array (for delay calculation)
         * @param {number} totalItems - Total number of items (for reverse animations)
         * @return {void} Method applies CSS classes and styles
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     applyAnimationEffect(itemElement, effect, index, totalItems) {
         // Remover qualquer classe de efeito anterior
         itemElement.classList.remove(
             'cmenu-effect-clockwise',
             'cmenu-effect-counterclockwise',
             'cmenu-effect-radial',
             'cmenu-effect-scale-fade',
             'cmenu-effect-bounce',
             'cmenu-effect-spiral',
             'cmenu-effect-wave'
         );
         
         switch (effect) {
             case ANIMATION_EFFECTS.CLOCKWISE:
                 itemElement.style.animationDelay = `${index * 0.05}s`;
                 itemElement.classList.add('cmenu-effect-clockwise');
                 break;
                 
             case ANIMATION_EFFECTS.COUNTERCLOCKWISE:
                 itemElement.style.animationDelay = `${(totalItems - index - 1) * 0.05}s`;
                 itemElement.classList.add('cmenu-effect-counterclockwise');
                 break;
                 
             case ANIMATION_EFFECTS.RADIAL:
                 itemElement.style.animationDelay = `${index * 0.08}s`;
                 itemElement.classList.add('cmenu-effect-radial');
                 break;
                 
             case ANIMATION_EFFECTS.SCALE_FADE:
                 itemElement.style.animationDelay = `${index * 0.06}s`;
                 itemElement.classList.add('cmenu-effect-scale-fade');
                 break;
                 
             case ANIMATION_EFFECTS.BOUNCE:
                 itemElement.style.animationDelay = `${index * 0.07}s`;
                 itemElement.classList.add('cmenu-effect-bounce');
                 break;
                 
             case ANIMATION_EFFECTS.SPIRAL:
                 itemElement.style.animationDelay = `${index * 0.09}s`;
                 itemElement.classList.add('cmenu-effect-spiral');
                 break;
                 
             case ANIMATION_EFFECTS.WAVE:
                 itemElement.style.animationDelay = `${index * 0.08}s`;
                 itemElement.classList.add('cmenu-effect-wave');
                 break;
                 
             default:
                 itemElement.style.animationDelay = `${index * 0.05}s`;
                 itemElement.classList.add('cmenu-effect-clockwise');
         }
     }

     /**
         * PURPOSE OF THE METHOD: Calculates position coordinates for menu items based on selected layout algorithm.
         * DESCRIPTION:
         *    - Determines which layout algorithm to use based on level and configuration
         *    - Handles special case for CORNER menu type (always uses quarter-circle)
         *    - Routes to layout-specific calculation methods for parent-dependent layouts (submenus)
         *    - Routes to main layout calculation methods for standard layouts
         *    - Returns array of {x, y} position objects for each item
         * 
         * DEPENDENCIES:
         *    - calculateFullCirclePositions() - Full 360° circular arrangement
         *    - calculateSemiCirclePositions() - 180° arc arrangement
         *    - calculateQuarterCirclePositions() - 90° corner arrangement
         *    - calculateHorizontalLinePositions() - Linear horizontal arrangement
         *    - calculateVerticalLinePositions() - Linear vertical arrangement
         *    - calculateSpiralPositions() - Spiraling outward arrangement
         *    - calculateSideArcPositions() - Arc relative to parent (submenus)
         *    - calculateRadialLinePositions() - Radial line from parent (submenus)
         *    - calculateFloatingGridPositions() - Grid relative to parent (submenus)
         * 
         * @param {number} level - Menu level index
         * @param {number} itemCount - Number of items to position
         * @param {number} maxSlots - Maximum slots available (for layout calculations)
         * @param {Object|null} parentPos - Position {x, y} of parent item for relative layouts
         * @return {Array<Object>} Array of position objects with {x, y} coordinates in pixels
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     calculatePositions(level, itemCount, maxSlots, parentPos = null) {
         const menuType = this.config.menuType;
         const layout = this.config.levelLayouts[level] || MENU_LAYOUTS.FULL_CIRCLE;
         const positions = [];
         
         // Menu de canto (Corner) - sempre em quarto de círculo
         if (menuType === MENU_TYPES.CORNER) {
             const radius = 120 + (level * 80);
             const angleStep = Math.PI / (maxSlots + 1);
             const startAngle = this.getStartAngle();
             
             for (let i = 0; i < itemCount; i++) {
                 const angle = startAngle + (angleStep * (i + 1));
                 positions.push({
                     x: Math.cos(angle) * radius,
                     y: Math.sin(angle) * radius
                 });
             }
             return positions;
         }
         
         // Layouts que dependem do item pai (apenas para submenus)
         if (level > 0 && parentPos) {
             if (layout === MENU_LAYOUTS.SIDE_ARC) {
                 return this.calculateSideArcPositions(itemCount, parentPos);
             }
             if (layout === MENU_LAYOUTS.RADIAL_LINE) {
                 return this.calculateRadialLinePositions(itemCount, parentPos);
             }
             if (layout === MENU_LAYOUTS.FLOATING_GRID) {
                 return this.calculateFloatingGridPositions(itemCount, parentPos);
             }
         }
         
         // Layouts principais (funcionam em qualquer nível)
         switch (layout) {
             case MENU_LAYOUTS.FULL_CIRCLE:
                 return this.calculateFullCirclePositions(level, itemCount, maxSlots);
                 
             case MENU_LAYOUTS.SEMI_CIRCLE:
                 return this.calculateSemiCirclePositions(level, itemCount, maxSlots);
                 
             case MENU_LAYOUTS.QUARTER_CIRCLE:
                 return this.calculateQuarterCirclePositions(level, itemCount, maxSlots);
                 
             case MENU_LAYOUTS.HORIZONTAL_LINE:
                 return this.calculateHorizontalLinePositions(level, itemCount);
                 
             case MENU_LAYOUTS.VERTICAL_LINE:
                 return this.calculateVerticalLinePositions(level, itemCount);
                 
             case MENU_LAYOUTS.SPIRAL_OUT:
                 return this.calculateSpiralPositions(level, itemCount);
                 
             default:
                 return this.calculateFullCirclePositions(level, itemCount, maxSlots);
         }
     }
        
     // Círculo completo (padrão)
     calculateFullCirclePositions(level, itemCount, maxSlots) {
         const positions = [];
         const radius = 140 + (level * 80);
         const angleStep = (2 * Math.PI) / maxSlots;
         
         for (let i = 0; i < itemCount; i++) {
             const angle = angleStep * i - Math.PI / 2;
             positions.push({
                 x: Math.cos(angle) * radius,
                 y: Math.sin(angle) * radius
             });
         }
         return positions;
     }
        
     /**
         * PURPOSE OF THE METHOD: Calculates positions for items arranged in a 180° semicircle arc.
         * DESCRIPTION:
         *    - Distributes items along a semicircular arc
         *    - Calculates radius based on menu level
         *    - Determines start angle based on openDirection configuration
         *    - Uses equal angle steps to space items uniformly along the arc
         * 
         * @param {number} level - Menu level index
         * @param {number} itemCount - Number of items to position
         * @param {number} maxSlots - Maximum slots available (for angle calculation)
         * @return {Array<Object>} Array of position objects with {x, y} coordinates
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     calculateSemiCirclePositions(level, itemCount, maxSlots) {
         const positions = [];
         const radius = 140 + (level * 80);
         const angleStep = Math.PI / (maxSlots - 1 || 1);
         const startAngle = this.getSemiCircleStartAngle();
         
         for (let i = 0; i < itemCount; i++) {
             const angle = startAngle + (angleStep * i);
             positions.push({
                 x: Math.cos(angle) * radius,
                 y: Math.sin(angle) * radius
             });
         }
         return positions;
     }
        
     /**
         * PURPOSE OF THE METHOD: Calculates positions for items arranged in a 90° quarter circle.
         * DESCRIPTION:
         *    - Distributes items along a quarter-circular arc
         *    - Calculates radius based on menu level
         *    - Determines start angle based on openDirection configuration
         *    - Uses equal angle steps to space items uniformly along the arc
         * 
         * @param {number} level - Menu level index
         * @param {number} itemCount - Number of items to position
         * @param {number} maxSlots - Maximum slots available (for angle calculation)
         * @return {Array<Object>} Array of position objects with {x, y} coordinates
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     calculateQuarterCirclePositions(level, itemCount, maxSlots) {
         const positions = [];
         const radius = 140 + (level * 80);
         const angleStep = (Math.PI / 2) / (maxSlots - 1 || 1);
         const startAngle = this.getQuarterCircleStartAngle();
         
         for (let i = 0; i < itemCount; i++) {
             const angle = startAngle + (angleStep * i);
             positions.push({
                 x: Math.cos(angle) * radius,
                 y: Math.sin(angle) * radius
             });
         }
         return positions;
     }
        
     /**
         * PURPOSE OF THE METHOD: Calculates positions for items arranged in a horizontal line.
         * DESCRIPTION:
         *    - Arranges items in a linear horizontal formation
         *    - Centers items around the origin point
         *    - Uses fixed spacing between items (85px)
         *    - All items share the same Y coordinate (0)
         * 
         * @param {number} level - Menu level index (not used, maintained for consistency)
         * @param {number} itemCount - Number of items to position
         * @return {Array<Object>} Array of position objects with {x, y} coordinates
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     calculateHorizontalLinePositions(level, itemCount) {
         const positions = [];
         const spacing = 85;
         const startX = -((itemCount - 1) * spacing) / 2;
         const yOffset = 0;
         
         for (let i = 0; i < itemCount; i++) {
             positions.push({
                 x: startX + (i * spacing),
                 y: yOffset
             });
         }
         return positions;
     }
        
     /**
         * PURPOSE OF THE METHOD: Calculates positions for items arranged in a vertical line.
         * DESCRIPTION:
         *    - Arranges items in a linear vertical formation
         *    - Centers items around the origin point
         *    - Uses fixed spacing between items (85px)
         *    - All items share the same X coordinate (0)
         * 
         * @param {number} level - Menu level index (not used, maintained for consistency)
         * @param {number} itemCount - Number of items to position
         * @return {Array<Object>} Array of position objects with {x, y} coordinates
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     calculateVerticalLinePositions(level, itemCount) {
         const positions = [];
         const spacing = 85;
         const startY = -((itemCount - 1) * spacing) / 2;
         const xOffset = 0;
         
         for (let i = 0; i < itemCount; i++) {
             positions.push({
                 x: xOffset,
                 y: startY + (i * spacing)
             });
         }
         return positions;
     }
        
     /**
         * PURPOSE OF THE METHOD: Calculates positions for items arranged in a spiraling outward pattern.
         * DESCRIPTION:
         *    - Creates spiral pattern with increasing radius for each item
         *    - Uses base radius with incremental increases
         *    - Calculates angle based on spiral step (5 items per full rotation)
         *    - Creates visually appealing outward spiral effect
         * 
         * @param {number} level - Menu level index (not used, maintained for consistency)
         * @param {number} itemCount - Number of items to position
         * @return {Array<Object>} Array of position objects with {x, y} coordinates
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     calculateSpiralPositions(level, itemCount) {
         const positions = [];
         const baseRadius = 100;
         const radiusIncrement = 30;
         const angleStep = (2 * Math.PI) / 5; // 5 itens por volta completa
         
         for (let i = 0; i < itemCount; i++) {
             const radius = baseRadius + (radiusIncrement * i);
             const angle = (angleStep * i) - Math.PI / 2;
             positions.push({
                 x: Math.cos(angle) * radius,
                 y: Math.sin(angle) * radius
             });
         }
         return positions;
     }
        
     /**
         * PURPOSE OF THE METHOD: Calculates positions for submenu items arranged in an arc relative to parent.
         * DESCRIPTION:
         *    - Calculates arc angle based on parent item position
         *    - Creates semicircular arc (70% of π radians) positioned relative to parent
         *    - Distributes items evenly along the arc
         *    - Used for submenus to create visual connection with parent item
         * 
         * @param {number} itemCount - Number of items to position
         * @param {Object} parentPos - Position object {x, y} of parent menu item
         * @return {Array<Object>} Array of position objects with {x, y} coordinates
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     calculateSideArcPositions(itemCount, parentPos) {
         const positions = [];
         const arcRadius = 120;
         const arcSpan = Math.PI * 0.7;
         const angleStep = itemCount > 1 ? arcSpan / (itemCount - 1) : 0;
         const startAngle = -arcSpan / 2;
         const parentAngle = Math.atan2(parentPos.y, parentPos.x);
         
         for (let i = 0; i < itemCount; i++) {
             const angle = parentAngle + startAngle + (angleStep * i);
             positions.push({
                 x: parentPos.x + Math.cos(angle) * arcRadius,
                 y: parentPos.y + Math.sin(angle) * arcRadius
             });
         }
         return positions;
     }
        
     /**
         * PURPOSE OF THE METHOD: Calculates positions for submenu items arranged in a radial line from parent.
         * DESCRIPTION:
         *    - Calculates radial angle from parent position to origin
         *    - Arranges items in a straight line extending from parent
         *    - Uses incremental spacing (80px) along the radial direction
         *    - Creates visual extension effect from parent item
         * 
         * @param {number} itemCount - Number of items to position
         * @param {Object} parentPos - Position object {x, y} of parent menu item
         * @return {Array<Object>} Array of position objects with {x, y} coordinates
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     calculateRadialLinePositions(itemCount, parentPos) {
         const positions = [];
         const spacing = 80;
         const startDistance = 100;
         const parentAngle = Math.atan2(parentPos.y, parentPos.x);
         
         for (let i = 0; i < itemCount; i++) {
             const distance = startDistance + (spacing * i);
             positions.push({
                 x: parentPos.x + Math.cos(parentAngle) * distance,
                 y: parentPos.y + Math.sin(parentAngle) * distance
             });
         }
         return positions;
     }
        
     /**
         * PURPOSE OF THE METHOD: Calculates positions for submenu items arranged in a grid relative to parent.
         * DESCRIPTION:
         *    - Calculates optimal grid dimensions (square-like arrangement)
         *    - Determines column and row count based on item count
         *    - Positions grid offset from parent in radial direction
         *    - Centers grid around calculated offset point
         *    - Creates organized grid layout for submenu items
         * 
         * @param {number} itemCount - Number of items to position
         * @param {Object} parentPos - Position object {x, y} of parent menu item
         * @return {Array<Object>} Array of position objects with {x, y} coordinates
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     calculateFloatingGridPositions(itemCount, parentPos) {
         const positions = [];
         const gridSpacing = 70;
         const cols = Math.ceil(Math.sqrt(itemCount));
         const rows = Math.ceil(itemCount / cols);
         const parentAngle = Math.atan2(parentPos.y, parentPos.x);
         const gridOffsetX = Math.cos(parentAngle) * 100;
         const gridOffsetY = Math.sin(parentAngle) * 100;
         const gridWidth = (cols - 1) * gridSpacing;
         const gridHeight = (rows - 1) * gridSpacing;
         
         for (let i = 0; i < itemCount; i++) {
             const col = i % cols;
             const row = Math.floor(i / cols);
             positions.push({
                 x: parentPos.x + gridOffsetX + (col * gridSpacing) - (gridWidth / 2),
                 y: parentPos.y + gridOffsetY + (row * gridSpacing) - (gridHeight / 2)
             });
         }
         return positions;
     }
     
     getSemiCircleStartAngle() {
         const direction = this.config.openDirection;
         switch (direction) {
             case 'right': return 0;
             case 'left': return Math.PI;
             case 'top': return Math.PI / 2;
             case 'bottom': return -Math.PI / 2;
             default: return 0;
         }
     }
        
     getQuarterCircleStartAngle() {
         const direction = this.config.openDirection;
         switch (direction) {
             case 'right': return -Math.PI / 4;
             case 'left': return Math.PI * 3 / 4;
             case 'top': return Math.PI * 3 / 4;
             case 'bottom': return -Math.PI / 4;
             default: return -Math.PI / 4;
         }
     }

     getStartAngle() {
         const direction = this.config.openDirection;
         switch (direction) {
             case 'right': return -Math.PI / 2;
             case 'left': return Math.PI / 2;
             case 'top': return Math.PI;
             case 'bottom': return 0;
             default: return -Math.PI / 2;
         }
     } 

     /**
         * PURPOSE OF THE METHOD: Creates a menu item DOM element with custom attributes, content, and event handlers.
         * DESCRIPTION:
         *    - Creates container div element for the menu item with positioning
         *    - Determines HTML tag type (button, anchor, div, etc.) from item configuration
         *    - Applies base CSS class and merges custom classes
         *    - Merges and applies attributes (id, href, target, rel, data-attributes) with priority handling
         *    - Injects custom HTML content if tagHTML is provided, otherwise uses icon or default content
         *    - Adds submenu indicator class if submenu exists
         *    - Creates label element if label text is provided
         *    - Attaches click event handler that respects custom element types
         *    - Stores position data in dataset for later reference
         * 
         * DEPENDENCIES:
         *    - document.createElement() - DOM API for element creation
         *    - Element.classList.add() - DOM API for class management
         *    - Element.setAttribute() - DOM API for attribute setting
         * 
         * @param {Object} item - Menu item configuration object
         * @param {string} item.tag - HTML tag type (button, a, div, etc.) - defaults to 'button'
         * @param {string} item.className - Additional CSS classes to apply
         * @param {string} item.tagId - ID attribute value
         * @param {string} item.tagHref - href attribute value (for links)
         * @param {string} item.target - target attribute value
         * @param {string} item.rel - rel attribute value
         * @param {Object} item.tagAttributes - Object with custom attributes to apply
         * @param {string} item.tagHTML - Custom HTML content (overrides icon if provided)
         * @param {string} item.icon - Icon class name (Font Awesome)
         * @param {string} item.label - Label text to display
         * @param {Array<Object>} item.submenu - Array of submenu items
         * @param {number} level - Menu level index
         * @param {Object} position - Position object {x, y} in pixels
         * @return {HTMLElement} Returns the created menu item container element
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     createMenuItem(item, level, position) {
         const menuItem = document.createElement('div');
         menuItem.className = 'cmenu-item';
         menuItem.dataset.level = level;
         menuItem.style.left = `${position.x}px`;
         menuItem.style.top = `${position.y}px`;
         
         menuItem.dataset.posX = position.x;
         menuItem.dataset.posY = position.y;
         
         // Determinar a tag a ser usada (padrão: button)
         const tagName = item.tag || 'button';
         const button = document.createElement(tagName);
         
         // Classe base sempre presente
         button.className = 'cmenu-item-button';
         
         // Adicionar classes customizadas se fornecidas
         if (item.className) {
             const customClasses = item.className.split(' ').filter(c => c.trim());
             customClasses.forEach(cls => {
                 if (cls.trim()) {
                     button.classList.add(cls.trim());
                 }
             });
         }
         
         // Mesclar tagAttributes primeiro (base)
         const attributesToSet = {};
         if (item.tagAttributes && typeof item.tagAttributes === 'object') {
             Object.assign(attributesToSet, item.tagAttributes);
         }
         
         // Propriedades diretas têm prioridade sobre tagAttributes
         if (item.tagId) {
             attributesToSet.id = item.tagId;
         }
         if (item.tagHref) {
             attributesToSet.href = item.tagHref;
         }
         if (item.target) {
             attributesToSet.target = item.target;
         }
         if (item.rel) {
             attributesToSet.rel = item.rel;
         }
         
         // Aplicar todos os atributos (última ocorrência prevalece automaticamente)
         Object.keys(attributesToSet).forEach(attr => {
             button.setAttribute(attr, attributesToSet[attr]);
         });
         
         if (item.submenu && item.submenu.length > 0) {
             button.classList.add('cmenu-has-submenu');
         }
         
         // Se tagHTML estiver definido, usar ele (ignorando icon)
         if (item.tagHTML) {
             // Criar um container temporário para parsear o HTML
             const tempDiv = document.createElement('div');
             tempDiv.innerHTML = item.tagHTML;
             
             // Mover todos os nós para dentro do button
             while (tempDiv.firstChild) {
                 button.appendChild(tempDiv.firstChild);
             }
         } else if (item.icon) {
             // Usar icon apenas se tagHTML não foi definido
             const icon = document.createElement('i');
             icon.className = item.icon;
             button.appendChild(icon);
         }
         
         if (this.config.menuType === MENU_TYPES.LABELED && item.label) {
             const text = document.createElement('span');
             text.className = 'cmenu-button-text';
             text.textContent = item.label;
             button.appendChild(text);
         }
         
         menuItem.appendChild(button);
         
         if (item.label && this.config.labelHover==true) {
             const label = document.createElement('div');
             label.className = 'cmenu-item-label';
             label.textContent = item.label;
             menuItem.appendChild(label);
         }
         
         
         
         button.addEventListener('click', (e) => {
             e.stopPropagation();
             this.handleItemClick(item, level, menuItem, e);
         });
         
         return menuItem;
     } 

     handleItemClick(item, level, itemElement, event) {
         if (item.submenu && item.submenu.length > 0) {
             this.toggleSubmenu(item, level, itemElement);
         } else {
             if (this.config.onItemClick) {
                 this.config.onItemClick(item, level, event);
             }
         }
     } 

     /**
         * PURPOSE OF THE METHOD: Toggles submenu visibility for a menu item.
         * DESCRIPTION:
         *    - Checks if submenu is currently active by examining CSS classes
         *    - If active: closes submenu and removes active state
         *    - If inactive: closes sibling submenus at same level, opens this submenu
         *    - Calculates parent item position for relative layout calculations
         *    - Renders submenu level with parent position context
         *    - Updates dimming effects for visual hierarchy
         *    - Triggers onSubmenuToggle callback if configured
         * 
         * DEPENDENCIES:
         *    - closeSubmenuFromLevel() - Closes submenu and nested levels
         *    - closeSiblingsAtLevel() - Closes other submenus at same level
         *    - renderLevel() - Creates and displays submenu items
         *    - updateDimming() - Updates visual hierarchy effects
         * 
         * @param {Object} item - Menu item object with submenu array
         * @param {number} level - Current menu level index
         * @param {HTMLElement} itemElement - The DOM element of the menu item
         * @return {void} Method toggles submenu visibility and updates state
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     toggleSubmenu(item, level, itemElement) {
         const nextLevel = level + 1;
         const isActive = itemElement.classList.contains('cmenu-item-active');
         
         if (isActive) {
             this.closeSubmenuFromLevel(nextLevel);
             itemElement.classList.remove('cmenu-item-active');
             this.state.activeSubmenus = this.state.activeSubmenus.filter(l => l < nextLevel);
             this.updateDimming();
         } else {
             this.closeSiblingsAtLevel(level);
             itemElement.classList.add('cmenu-item-active');
             this.state.activeSubmenus.push(nextLevel);
             const parentPos = {
                 x: parseFloat(itemElement.dataset.posX),
                 y: parseFloat(itemElement.dataset.posY)
             };
             this.renderLevel(nextLevel, item.submenu, parentPos);
             this.updateDimming();
             
             if (this.config.onSubmenuToggle) {
                 this.config.onSubmenuToggle(item, nextLevel, true);
             }
         }
     }

     closeSiblingsAtLevel(level) {
         const levelContainer = this.state.renderedElements.get(level);
         if (levelContainer) {
             const items = levelContainer.querySelectorAll('.cmenu-item-active');
             items.forEach(item => item.classList.remove('cmenu-item-active'));
         }
         this.closeSubmenuFromLevel(level + 1);
     }  

     closeSubmenuFromLevel(level) {
         for (let l = level; l < 10; l++) {
             const container = this.state.renderedElements.get(l);
             if (container) {
                 container.remove();
                 this.state.renderedElements.delete(l);
                 this.state.levelData.delete(l);
                 this.state.currentPages[l] = 0;
             }
         }
         this.state.activeSubmenus = this.state.activeSubmenus.filter(l => l < level);
         
         if (this.config.menuType === MENU_TYPES.CORNER) {
             this.updateNavigationArrows(level - 1);
         }
     } 

     updateDimming() {
         const allItems = this.menuWrapper.querySelectorAll('.cmenu-item');
         
         allItems.forEach(item => {
             const itemLevel = parseInt(item.dataset.level);
             const isActive = item.classList.contains('cmenu-item-active');
             const hasActiveSubmenu = this.state.activeSubmenus.includes(itemLevel + 1);
             
             item.classList.remove('cmenu-dimmed');
             
             if (hasActiveSubmenu && !isActive) {
                 item.classList.add('cmenu-dimmed');
             }
         });
         
         if (this.state.activeSubmenus.length > 0) {
             this.buttonElement.classList.add('cmenu-dimmed');
         } else {
             this.buttonElement.classList.remove('cmenu-dimmed');
         }
     } 

     /**
         * PURPOSE OF THE METHOD: Calculates if there are more items to show after current page.
         * DESCRIPTION:
         *    - Calculates total items shown so far including current page
         *    - Compares with total items to determine if there are more items
         * 
         * @param {Array} items - All items array
         * @param {number} currentPage - Current page index
         * @param {number} maxVisible - Maximum visible items per page
         * @param {number} itemsShownBefore - Number of items shown in previous pages
         * @return {boolean} true if there are more items to show
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     calculateHasNext(items, currentPage, maxVisible, itemsShownBefore) {
         const totalItems = items.length;
         if (totalItems === 0) return false;
         
         // Calcular quantos itens serão mostrados nesta página
         // Assumir o pior caso (dois botões) para calcular se há mais itens
         let availableSlots = maxVisible;
         const hasPrev = currentPage > 0;
         
         if (totalItems > maxVisible && this.config.menuType !== MENU_TYPES.CORNER) {
             // Verificar se tem itens restantes após mostrar os itens desta página
             // Primeiro calcula quantos itens restam
             const remainingItems = totalItems - itemsShownBefore;
             
             // Se tem prev, subtrai 1 slot
             if (hasPrev) {
                 availableSlots -= 1;
             }
             
             // Se restam mais itens do que podem ser mostrados nesta página, tem next
             if (remainingItems > availableSlots) {
                 // Tem next, então subtrai mais 1 slot para o botão next
                 availableSlots -= 1;
             }
         }
         
         // Verificar se ainda há itens após esta página
         const totalShownAfterThisPage = itemsShownBefore + availableSlots;
         return totalShownAfterThisPage < totalItems;
     } 

     addNavigationButtons(levelContainer, level, allItems, currentSlots, maxVisible) {
         const currentPage = this.state.currentPages[level];
        
         // Calcular quantos itens foram mostrados antes desta página
         let itemsShownBefore = 0;
         for (let page = 0; page < currentPage; page++) {
             let pageSlots = maxVisible;
             const pageHasNext = this.calculateHasNext(allItems, page, maxVisible, itemsShownBefore);
             const pageHasPrev = page > 0;
             
             if (pageHasNext && pageHasPrev) {
                 pageSlots -= 2;
             } else if (pageHasNext || pageHasPrev) {
                 pageSlots -= 1;
             }
             
             itemsShownBefore += pageSlots;
         }
         
         const hasNext = this.calculateHasNext(allItems, currentPage, maxVisible, itemsShownBefore);
         const hasPrev = currentPage > 0;
          
         if (this.config.menuType === MENU_TYPES.CORNER) {
              return;
          } else {
              const positions = this.calculatePositions(level, maxVisible, maxVisible);
              
              if (hasPrev) {
                  // Botão prev vai na primeira posição
                  const prevIndex = 0;
                  const prevButton = this.createNavButton('prev', level, allItems, prevIndex, positions);
                  levelContainer.appendChild(prevButton);
              }
              
              if (hasNext) {
                  // Botão next vai na última posição disponível
                  const nextIndex = Math.max(0, maxVisible - 1);
                  const nextButton = this.createNavButton('next', level, allItems, nextIndex, positions);
                  levelContainer.appendChild(nextButton);
              }
          }
     }

     createNavButton(type, level, allItems, slotIndex, positions) {
         const position = positions[slotIndex] || { x: 0, y: 0 };
         
         const navItem = document.createElement('div');
         navItem.className = `cmenu-item cmenu-nav-button cmenu-nav-${type}`;
         navItem.style.left = `${position.x}px`;
         navItem.style.top = `${position.y}px`;
         
         const button = document.createElement('button');
         button.className = 'cmenu-item-button';
         button.innerHTML = type === 'next' 
             ? '<i class="fas fa-ellipsis-h"></i>' 
             : '<i class="fas fa-arrow-left"></i>';
         
         button.addEventListener('click', (e) => {
             e.stopPropagation();
             this.navigate(level, type === 'next' ? 1 : -1, allItems);
         });
         
         navItem.appendChild(button);
         return navItem;
     } 

     updateNavigationArrows(level) {
         if (this.config.menuType !== MENU_TYPES.CORNER) return;
         
         this.removeNavigationArrows();
         
         const highestLevel = Math.max(...this.state.activeSubmenus, 0);
         if (level !== highestLevel && level !== 0) return;
         
         const levelData = this.state.levelData.get(level);
         if (!levelData) return;
         
         const { items, maxVisible } = levelData;
         const currentPage = this.state.currentPages[level] || 0;
         const needsNav = items.length > maxVisible;
         
         if (!needsNav) return;
         
         const hasNext = (currentPage + 1) * maxVisible < items.length;
         const hasPrev = currentPage > 0;
         
         if (hasPrev) {
             const prevArrow = this.createArrowButton('prev', level, items, maxVisible);
             this.menuContainer.appendChild(prevArrow);
         }
         
         if (hasNext) {
             const nextArrow = this.createArrowButton('next', level, items, maxVisible);
             this.menuContainer.appendChild(nextArrow);
         }
     } 

     createArrowButton(type, level, allItems, maxVisible) {
         const arrow = document.createElement('div');
         arrow.className = `cmenu-arrow cmenu-arrow-${type}`;
         arrow.dataset.level = level;
         arrow.innerHTML = type === 'next' 
             ? '<i class="fas fa-redo"></i>' 
             : '<i class="fas fa-undo"></i>';
         
         arrow.addEventListener('click', (e) => {
             e.stopPropagation();
             this.navigate(level, type === 'next' ? 1 : -1, allItems, maxVisible);
         });
         
         return arrow;
     }  

     removeNavigationArrows() {
         const arrows = this.menuContainer.querySelectorAll('.cmenu-arrow');
         arrows.forEach(arrow => arrow.remove());
     } 

     navigate(level, direction, allItems, maxVisible = null) {
         const currentPage = this.state.currentPages[level];
         const maxItems = maxVisible || this.config.maxVisibleItems[level] || 5;
         const totalItems = allItems.length;
         
         // Calcular número máximo de páginas válidas
         let maxValidPage = 0;
         let itemsCounted = 0;
         let page = 0;
         
         // Iterar até encontrar todas as páginas válidas
         while (itemsCounted < totalItems && page < 1000) { // limite de segurança
             let pageSlots = maxItems;
             
             // Calcular quantos itens foram mostrados antes desta página
             let itemsShownBefore = 0;
             for (let prevPage = 0; prevPage < page; prevPage++) {
                 let prevPageSlots = maxItems;
                 const prevPageHasNext = this.calculateHasNext(allItems, prevPage, maxItems, itemsShownBefore);
                 const prevPageHasPrev = prevPage > 0;
                 
                 if (prevPageHasNext && prevPageHasPrev) {
                     prevPageSlots -= 2;
                 } else if (prevPageHasNext || prevPageHasPrev) {
                     prevPageSlots -= 1;
                 }
                 
                 itemsShownBefore += prevPageSlots;
             }
             
             const pageHasNext = this.calculateHasNext(allItems, page, maxItems, itemsShownBefore);
             const pageHasPrev = page > 0;
             
             if (pageHasNext && pageHasPrev) {
                 pageSlots -= 2;
             } else if (pageHasNext || pageHasPrev) {
                 pageSlots -= 1;
             }
             
             if (itemsCounted + pageSlots > totalItems) {
                 // Última página
                 maxValidPage = page;
                 break;
             }
             
             itemsCounted += pageSlots;
             maxValidPage = page;
             
             if (itemsCounted >= totalItems) {
                 break;
             }
             
             page++;
         }
          
          let newPage = currentPage + direction;
         
         // Validar limites com wraparound
         if (newPage < 0) {
             newPage = maxValidPage;
         } else if (newPage > maxValidPage) {
             newPage = 0;
         }
          
          this.state.currentPages[level] = newPage;
          
          const oldContainer = this.state.renderedElements.get(level);
          if (oldContainer) {
              oldContainer.remove();
          }
          
         this.renderLevel(level, allItems);
     }  

     /**
         * PURPOSE OF THE METHOD: Automatically adjusts menu item positions to prevent viewport overflow.
         * DESCRIPTION:
         *    - Checks if autoAdjustPosition is enabled in configuration
         *    - Iterates through all menu items in the level container
         *    - Calculates actual position of each item relative to viewport using getBoundingClientRect()
         *    - Saves original position before adjustment for potential restoration
         *    - Detects items that exceed viewport boundaries (with 20px safety margin)
         *    - Calculates offset adjustments for items outside viewport
         *    - Applies position adjustments to keep items within visible area
         *    - Marks adjusted items with CSS class for visual feedback
         *    - Updates dataset with new positions for state consistency
         * 
         * DEPENDENCIES:
         *    - Element.getBoundingClientRect() - DOM API for element position calculation
         *    - window.innerWidth, window.innerHeight - Viewport dimensions
         *    - requestAnimationFrame - Called from renderLevel for timing
         * 
         * @param {HTMLElement} levelContainer - The container element holding menu items for this level
         * @return {void} Method modifies item positions and adds adjustment markers
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     adjustItemsToViewport(levelContainer) {
         if (!this.config.autoAdjustPosition) return;
         
         const items = levelContainer.querySelectorAll('.cmenu-item:not(.cmenu-nav-button)');
         const level = parseInt(levelContainer.dataset.level) || 0;
         const margin = 20; // Margem de segurança em pixels
         const viewport = {
             width: window.innerWidth,
             height: window.innerHeight
         };
         
         items.forEach((item, index) => {
             // Salvar posição original se ainda não foi salva
             const itemKey = `item_${level}_${index}`;
             if (!this.state.originalPositions.has(itemKey)) {
                 const originalLeft = parseFloat(item.style.left) || parseFloat(item.dataset.posX) || 0;
                 const originalTop = parseFloat(item.style.top) || parseFloat(item.dataset.posY) || 0;
                 this.state.originalPositions.set(itemKey, {
                     left: originalLeft,
                     top: originalTop,
                     element: item,
                     level: level
                 });
                 // Armazenar key no elemento para facilitar busca
                 item.dataset.originalKey = itemKey;
             }
             
             const rect = item.getBoundingClientRect();
             const itemLeft = rect.left;
             const itemRight = rect.right;
             const itemTop = rect.top;
             const itemBottom = rect.bottom;
             
             let adjusted = false;
             let offsetX = 0;
             let offsetY = 0;
             
             // Verificar limites horizontais
             if (itemRight > viewport.width - margin) {
                 // Item está saindo pela direita
                 offsetX = (viewport.width - margin) - itemRight;
                 adjusted = true;
             } else if (itemLeft < margin) {
                 // Item está saindo pela esquerda
                 offsetX = margin - itemLeft;
                 adjusted = true;
             }
             
             // Verificar limites verticais
             if (itemBottom > viewport.height - margin) {
                 // Item está saindo por baixo
                 offsetY = (viewport.height - margin) - itemBottom;
                 adjusted = true;
             } else if (itemTop < margin) {
                 // Item está saindo por cima
                 offsetY = margin - itemTop;
                 adjusted = true;
             }
             
             // Aplicar ajustes se necessário
             if (adjusted) {
                 const currentLeft = parseFloat(item.style.left) || parseFloat(item.dataset.posX) || 0;
                 const currentTop = parseFloat(item.style.top) || parseFloat(item.dataset.posY) || 0;
                 
                 const newLeft = currentLeft + offsetX;
                 const newTop = currentTop + offsetY;
                 
                 item.style.left = `${newLeft}px`;
                 item.style.top = `${newTop}px`;
                 item.classList.add('cmenu-adjusted');
                 
                 // Atualizar dataset para manter consistência
                 item.dataset.posX = newLeft;
                 item.dataset.posY = newTop;
                 item.dataset.adjusted = 'true';
             } else {
                 item.classList.remove('cmenu-adjusted');
                 item.dataset.adjusted = 'false';
             }
         });
     } 
 
     /** 
         * PURPOSE OF THE METHOD: Checks and restores menu items to original positions if viewport space becomes available.
         * DESCRIPTION:
         *    - Verifies that autoAdjustPosition is enabled and menu is currently open
         *    - Finds all items that have been adjusted (marked with data-adjusted="true")
         *    - Retrieves original positions from state.originalPositions Map
         *    - Calculates estimated absolute position if original position were restored
         *    - Checks if original position would fit within viewport boundaries (with safety margin)
         *    - Restores position if it fits horizontally and vertically
         *    - Removes adjustment markers and updates dataset
         *    - Called on mouseenter events for button and container elements
         * 
         * DEPENDENCIES:
         *    - Element.getBoundingClientRect() - DOM API for element dimensions
         *    - window.innerWidth, window.innerHeight - Viewport dimensions
         *    - this.state.originalPositions - Map storing original position data
         * 
         * @return {void} Method restores positions and updates element states
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     checkAndRestorePositions() {
         if (!this.config.autoAdjustPosition || !this.state.isOpen) return;
         
         const margin = 20; // Margem de segurança em pixels
         const viewport = {
             width: window.innerWidth,
             height: window.innerHeight
         };
         
         // Verificar todos os itens ajustados
         this.state.renderedElements.forEach((levelContainer) => {
             const adjustedItems = levelContainer.querySelectorAll('.cmenu-item[data-adjusted="true"]');
             
             adjustedItems.forEach(item => {
                 // Encontrar posição original salva usando a key armazenada
                 const itemKey = item.dataset.originalKey;
                 if (!itemKey) return;
                 
                 const originalPos = this.state.originalPositions.get(itemKey);
                 if (!originalPos) return;
                 
                 // Calcular posição que teria se restaurasse
                 const tempLeft = originalPos.left;
                 const tempTop = originalPos.top;
                 
                 // Obter posição do wrapper do menu
                 const menuWrapperRect = this.menuWrapper.getBoundingClientRect();
                 const wrapperCenterX = menuWrapperRect.left + menuWrapperRect.width / 2;
                 const wrapperCenterY = menuWrapperRect.top + menuWrapperRect.height / 2;
                 
                 // Calcular posição absoluta estimada
                 const estimatedX = wrapperCenterX + tempLeft;
                 const estimatedY = wrapperCenterY + tempTop;
                 
                 // Obter dimensões do item
                 const rect = item.getBoundingClientRect();
                 const itemWidth = rect.width;
                 const itemHeight = rect.height;
                 
                 // Verificar se a posição original cabe na viewport
                 const fitsHorizontally = 
                     (estimatedX - itemWidth / 2 >= margin) && 
                     (estimatedX + itemWidth / 2 <= viewport.width - margin);
                 
                 const fitsVertically = 
                     (estimatedY - itemHeight / 2 >= margin) && 
                     (estimatedY + itemHeight / 2 <= viewport.height - margin);
                 
                 // Se cabe, restaurar posição original
                 if (fitsHorizontally && fitsVertically) {
                     item.style.left = `${originalPos.left}px`;
                     item.style.top = `${originalPos.top}px`;
                     item.classList.remove('cmenu-adjusted');
                     item.dataset.adjusted = 'false';
                     item.dataset.posX = originalPos.left;
                     item.dataset.posY = originalPos.top;
                 }
             });
         });
     }

     /**
         * PURPOSE OF THE METHOD: Prevents or restores page scrolling when menu is open or closed.
         * DESCRIPTION:
         *    - Saves current scroll position (X and Y coordinates) when enabling scroll prevention
         *    - Applies CSS styles to body element to lock scroll (overflow: hidden, position: fixed)
         *    - Maintains visual scroll position by applying negative top/left offsets
         *    - Restores original scroll position and removes lock styles when disabling
         *    - Used to prevent page scrolling when preventPageScroll configuration is enabled
         * 
         * DEPENDENCIES:
         *    - window.scrollY, window.scrollX - Current scroll position
         *    - window.scrollTo() - Scroll restoration API
         *    - document.body.style - CSS style manipulation
         * 
         * @param {boolean} enabled - true to prevent scrolling, false to restore
         * @return {void} Method modifies document.body styles and scroll position
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     preventPageScroll(enabled) {
         if (enabled) {
             // Salvar scroll atual
             this.state.savedScrollY = window.scrollY;
             this.state.savedScrollX = window.scrollX;
             
             // Bloquear scroll
             document.body.style.overflow = 'hidden';
             document.body.style.position = 'fixed';
             document.body.style.top = `-${this.state.savedScrollY}px`;
             document.body.style.left = `-${this.state.savedScrollX}px`;
             document.body.style.width = '100%';
         } else {
             // Restaurar scroll
             if (this.state.savedScrollY !== undefined) {
                 document.body.style.overflow = '';
                 document.body.style.position = '';
                 document.body.style.top = '';
                 document.body.style.left = '';
                 document.body.style.width = '';
                 
                 window.scrollTo(this.state.savedScrollX || 0, this.state.savedScrollY || 0);
                 this.state.savedScrollY = undefined;
                 this.state.savedScrollX = undefined;
             }
         }
     } 
 
     destroy() {
         this.closeMenu();
        
         // Limpar posições originais
         this.state.originalPositions.clear();
         
         const parent = this.menuContainer.parentNode;
         if (parent) {
             parent.insertBefore(this.buttonElement, this.menuContainer);
             this.menuContainer.remove();
         }
         
         this.buttonElement.classList.remove('cmenu-center-button', `cmenu-type-${this.config.menuType}`);
     }

     /**
         * PURPOSE OF THE METHOD: Updates menu configuration and reinitializes if menu is open.
         * DESCRIPTION:
         *    - Merges new configuration with existing configuration
         *    - Normalizes maxVisibleItems array to match new structure
         *    - Normalizes levelLayouts array to match new structure
         *    - If menu is currently open, closes and reopens to apply changes
         *    - Allows dynamic reconfiguration without destroying menu instance
         * 
         * DEPENDENCIES:
         *    - normalizeMaxVisibleItems() - Validates item count configuration
         *    - normalizeLevelLayouts() - Validates layout configuration
         *    - closeMenu() - Cleans up current menu state
         *    - openMenu() - Reinitializes with new configuration
         * 
         * @param {Object} newConfig - Configuration object with properties to update
         * @return {void} Method updates configuration and reinitializes if needed
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     updateConfig(newConfig) {
         this.config = { ...this.config, ...newConfig };
         this.normalizeMaxVisibleItems();
         this.normalizeLevelLayouts();
          
         if (this.state.isOpen) {
             this.closeMenu();
             this.openMenu();
         }
     }  

     /**
         * PURPOSE OF THE METHOD: Returns the current open/closed state of the menu.
         * DESCRIPTION:
         *    - Returns boolean value indicating if menu is currently open
         *    - Useful for conditional logic based on menu state
         * 
         * @return {boolean} true if menu is open, false if closed
         * @author Syntax Serenity <fs.developerfullstack@gmail.com>
     */
     isMenuOpen() {return this.state.isOpen;}
 } 
    
 // Exportar para uso global
 global.CircularMenu = CircularMenu;
 global.CircularMenu.TYPES = MENU_TYPES;
 global.CircularMenu.EFFECTS = ANIMATION_EFFECTS;
 global.CircularMenu.LAYOUTS = MENU_LAYOUTS;
 global.CircularMenu.SUBMENU_LAYOUTS = SUBMENU_LAYOUTS;

})(typeof window !== 'undefined' ? window : this);

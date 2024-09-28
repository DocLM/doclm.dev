function initialize_homepage() {
    const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];

    const debounce = (func, delay) => {
        let timerId; // Holds a reference to the timeout between calls.
        return (...args) => {
            clearTimeout(timerId); // Clears the current timeout, if any, to reset the debounce timer.
            timerId = setTimeout(() => {
                func.apply(this, args); // Calls the passed function after the specified delay with the correct context and arguments.
            }, delay);
        };
    };

    class TextSplitter {
        // Constructor for TextScrollEffect which sets up the text animation.
        // Parameters:
        //   textElement: HTMLElement - The DOM element that contains the text to be animated.
        //   options: Object (optional) - Configuration options for the text splitting and callbacks.
        //     options.resizeCallback: Function - A function to call on window resize events.
        //     options.splitTypeTypes: String - Specifies the types of splits to perform on the text. 
        //         Possible values are based on SplitType's configuration, such as 'lines', 'words', 'chars'.
        //         See SplitType documentation for more details: https://github.com/lukePeavey/SplitType
        // This constructor initializes the text splitting with specified options, sets up resize handling,
        // and prepares the text element for animation effects.
        constructor(textElement, options = {}) {
            // Ensure the textElement is a valid HTMLElement.
            if (!textElement || !(textElement instanceof HTMLElement)) {
                throw new Error('Invalid text element provided.');
            }

            const { resizeCallback, splitTypeTypes } = options;

            this.textElement = textElement;
            // Assign the resize callback if provided and is a function, otherwise null.
            this.onResize = typeof resizeCallback === 'function' ? resizeCallback : null;

            // Set options for SplitType based on provided splitTypeTypes or default to SplitType's default behavior.
            // The 'types' option allows customization of how text is split (e.g., into lines, words, characters).
            // Refer to SplitType documentation for possible values and updates: https://github.com/lukePeavey/SplitType
            const splitOptions = splitTypeTypes ? { types: splitTypeTypes } : {};
            this.splitText = new SplitType(this.textElement, splitOptions);

            // Initialize ResizeObserver to re-split text on resize events, if a resize callback is provided.
            if (this.onResize) {
                this.initResizeObserver(); // Set up observer to detect resize events.
            }
        }

        // Sets up ResizeObserver to re-split text on element resize.
        initResizeObserver() {
            this.previousContainerWidth = null; // Track element width to detect resize.

            let resizeObserver = new ResizeObserver(
                debounce((entries) => this.handleResize(entries), 100)
            );
            resizeObserver.observe(this.textElement); // Start observing the text element.
        }

        // Handles element resize, re-splitting text if width changes.
        handleResize(entries) {
            const [{ contentRect }] = entries;
            const width = Math.floor(contentRect.width);
            // If element width changed, re-split text and call resize callback.
            if (this.previousContainerWidth && this.previousContainerWidth !== width) {
                this.splitText.split(); // Re-split text for new width.
                this.onResize(); // Execute the callback function.
            }
            this.previousContainerWidth = width; // Update stored width.
        }

        // Reset text
        revert() {
            return this.splitText.revert();
        }

        // Returns the lines created by splitting the text element.
        getLines() {
            return this.splitText.lines;
        }

        // Returns the words created by splitting the text element.
        getWords() {
            return this.splitText.words;
        }

        // Returns the chars created by splitting the text element.
        getChars() {
            return this.splitText.chars;
        }
    }

    // Defines a class to create hover effects on text.
    class TextAnimator {
        constructor(textElement) {
            // Check if the provided element is valid.
            if (!textElement || !(textElement instanceof HTMLElement)) {
                throw new Error('Invalid text element provided.');
            }

            this.textElement = textElement;
            this.originalChars = []; // Store the original characters
            this.splitText();
        }

        splitText() {
            // Split text for animation and store the reference.
            this.splitter = new TextSplitter(this.textElement, {
                splitTypeTypes: 'words, chars'
            });

            // Save the initial state of each character
            this.originalChars = this.splitter.getChars().map(char => char.innerHTML);
        }

        animate() {
            // Reset any ongoing animations
            this.reset();

            // Query all individual characters in the line for animation.
            const chars = this.splitter.getChars();

            chars.forEach((char, position) => {
                let initialHTML = char.innerHTML;

                gsap
                    .timeline()
                    .fromTo(char, {
                        opacity: 0,
                        transformOrigin: '50% 0%'
                    },
                        {
                            duration: 0.03,
                            ease: 'none',
                            onComplete: () => gsap.set(char, { innerHTML: initialHTML, delay: 0.03 }),
                            repeat: 3,
                            repeatRefresh: true,
                            repeatDelay: 0.1, // delay between repeats
                            delay: (position + 1) * 0.08, // delay between chars
                            innerHTML: () => {
                                return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
                            },
                            opacity: 1
                        })
            });
        }

        reset() {
            // Reset the text to its original state
            const chars = this.splitter.getChars();
            chars.forEach((char, index) => {
                gsap.killTweensOf(char); // Ensure no ongoing animations
                char.innerHTML = this.originalChars[index];
            });
        }
    }

    document.querySelectorAll('#profile article h1').forEach(item => {
        const animator = new TextAnimator(item);
        animator.animate();
    });
    document.querySelectorAll('#profile article h2').forEach(item => {
        const animator = new TextAnimator(item);
        animator.animate();
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
    initialize_homepage();
});
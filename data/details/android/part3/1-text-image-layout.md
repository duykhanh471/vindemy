

# Jetpack Compose Text: A Complete Guide

ByMohammed RashidUpdated onOctober 15, 2023

Welcome to this all-encompassing guide on Jetpack Compose Text! Jetpack Compose has revolutionized the way we think about UI development in Android. With a more intuitive and functional approach, it offers a wide range of tools to manage and style text.

Whether you’re a seasoned developer or just getting started, this guide will walk you through the many facets of text management in Jetpack Compose.

## Basic Text Display

Text is an essential part of any application. In Jetpack Compose, displaying basic text is as simple as using the `Text` composable:

```
@Composable
fun TextExample() {
    Text("Hello, Jetpack Compose!")
}
```

This code will render a simple text on the screen.

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

![jetpack compose text](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-text-461x1024.png?ezimgfmt=rs:234x520/rscb1/ng:webp/ngcb1)

### Display Variables within Text

Sometimes, you need to display dynamic data. For instance, user input or data fetched from a server. In Compose, you can easily integrate variables into text:

```
@Composable
fun TextExample() {
    val name = "Rashid"
    Text("Hello, $name!")
}
```

This will display: “Hello, Rashid!”

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

![jetpack compose variable in text](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-variable-in-text-461x1024.png?ezimgfmt=rs:234x518/rscb1/ng:webp/ngcb1)

### Display Number in Text

Displaying numbers works similarly to displaying variables. If you have an integer or a float, you can seamlessly incorporate it:

```
@Composable
fun TextExample() {
    val score = 99
    Text("Your score is: $score")
}
```

This displays: “Your score is: 99”

![jetpack compose number in text](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-number-in-text-461x1024.png?ezimgfmt=rs:242x538/rscb1/ng:webp/ngcb1)

### Display Text from Resource

It is recommended to display text from string resources instead of hard coding. Got res > values > strings.xml and add a text as given below.

```
<resources>
    <string name="app_name">My Application</string>
    <string name="hello_world">Hello World!</string>
</resources>
```

Then you can display this string as text.

```
@Composable
fun TextExample() {
    Text(stringResource(R.string.hello_world))
}
```

## Text Font

### System Fonts

Jetpack Compose provides default support for system fonts. Using these is straightforward and ensures consistency with the platform’s design:

```
@Composable
fun TextExample() {
    Text("Using System Font", style = TextStyle.Default)
}
```

With this, your text will adopt the default font style of the Android system.

### Change Font Size

Adjusting [font size](https://codingwithrashid.com/how-to-change-font-size-of-text-using-jetpack-compose/) is essential for readability and design:

```
@Composable
fun TextExample() {
    Text("Bigger Font", fontSize = 20.sp)
}
```

Using the `sp` unit ensures that the text scales according to user preferences and device settings.

![Jetpack compose font size](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-font-size-461x1024.png?ezimgfmt=rs:255x566/rscb1/ng:webp/ngcb1)

---

### Custom Fonts

To set your app apart, you might want to use a [custom font](https://codingwithrashid.com/how-to-add-custom-fonts-in-android-jetpack-compose/). First, place your font file (e.g., `.ttf` or `.otf`) in the `res/font/` directory. Then, use it in Compose:

```
val customFont = FontFamily(Font(R.font.your_custom_font))
Text("Custom Font Style", fontFamily = customFont)
```

This will render the text with your chosen custom font.

## Font Style

### Italic Text

Giving emphasis to specific parts of your text can be achieved with [italics](https://codingwithrashid.com/how-to-make-text-italic-in-android-jetpack-compose/):

```
Text("This is italic text", fontStyle = FontStyle.Italic)
```

The `FontStyle` property makes it easy to render italicized text on the screen.

![jetpack compose italic text](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-italic-text-461x1024.png?ezimgfmt=rs:248x552/rscb1/ng:webp/ngcb1)

### Bold Text

For stronger emphasis or highlighting key information, bold is the way to go:

```
Text("This is bold text", fontWeight = FontWeight.Bold)
```

With `FontWeight`, you can effortlessly [make your text bold](https://codingwithrashid.com/how-to-make-text-bold-in-android-jetpack-compose/).

![jetpack compose bold text](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-bold-text-461x1024.png?ezimgfmt=rs:261x580/rscb1/ng:webp/ngcb1)

### Text Underline

Underlining is another effective way to highlight or draw attention:

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

```
Text("Underlined text", textDecoration = TextDecoration.Underline)
```

The `TextDecoration` property offers a suite of decorative features, including [underline](https://codingwithrashid.com/how-to-add-underlined-text-in-android-jetpack-compose/).

![jetpack compose underlined text](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-underlined-text-461x1024.png?ezimgfmt=rs:258x574/rscb1/ng:webp/ngcb1)

### Strikethrough Text

To signify outdated information or show a crossed-out option, a [strikethrough](https://codingwithrashid.com/how-to-add-strikethrough-text-in-android-jetpack-compose/) is handy:

```
Text("Strikethrough text", textDecoration = TextDecoration.LineThrough)
```

Simply use the `LineThrough` option of `TextDecoration` to achieve this effect.

![jetpack compose strikethrough text](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-strikethrough-text-461x1024.png?ezimgfmt=rs:268x596/rscb1/ng:webp/ngcb1)

### Font Color

Colors can help convey mood, significance, or categorization:

```
Text("Colored text", color = Color.Red)
```

With the `color` parameter, you can easily choose from a variety of colors.

![jetpack compose text color.](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-text-color-461x1024.png?ezimgfmt=rs:271x600/rscb1/ng:webp/ngcb1)

### Gradient Text

For a more dynamic look, apply a gradient to your text:

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

```
@OptIn (ExperimentalTextApi::class)
@Composable
fun TextExample() {
    Text(
        fontSize = 30.sp,
        text = ("This text has a beautiful gradient color. Just Check it!"),
        style = TextStyle(
            brush = Brush.linearGradient(
                colors = listOf(Color.Magenta, Color.Cyan)
            )
        )
    )
}
```

Using a gradient brush adds flair to your textual content.

![jetpack compose gradient text](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22461%22%20height=%221024%22%3E%3C/svg%3E)

### Font Family

Jetpack Compose allows for adjustments like serifs for nuanced design choices:

```
Text("Serif text", fontFamily = FontFamily.Serif)
```

Choose from Serif, SansSerif, Monospace, and more to match your design vision.

### Font Weight

Beyond just bold, you can select from a range of font weights:

```
Text("Light text", fontWeight = FontWeight.Light)
```

From `UltraLight` to `Black`, there’s a weight for every need.

![jetpack compose font weight](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22461%22%20height=%221024%22%3E%3C/svg%3E)

### Text Shadow

Shadows are a great way to give depth to your text, making it stand out against various backgrounds. With Jetpack Compose, [adding a shadow to your text](https://codingwithrashid.com/how-to-add-shadows-to-text-in-android-jetpack-compose/) is easy.

```
@Composable
fun TextExample() {
    val offset = Offset(5.0f, 10.0f)
    Text(
        text = "Hello world!",
        style = TextStyle(
            fontSize = 24.sp,
            shadow = Shadow(
                color = Color.Gray, offset = offset, blurRadius = 3f
            )
        )
    )
}
```

In the above code, `Offset` which determines the horizontal and vertical distance of the shadow from the text. we apply a shadow using the `Shadow` class and a `blurRadius` that softens the edges of the shadow.

![jetpack compose text shadow](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-text-shadow-461x1024.png?ezimgfmt=rs:294x652/rscb1/ng:webp/ngcb1)

### Text Opacity

Opacity can play an important role in text design, especially when you’re looking to create hierarchy or subtly blend text with its background. [Adjusting text opacity](https://codingwithrashid.com/how-to-change-text-color-opacity-in-android-jetpack-compose/) in Jetpack Compose is straightforward.

Consider the following:

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

```
Text(
    text = "Semi-Transparent Text",
    color = Color.Red.copy(alpha = 0.5f)
)
```

To adjust the opacity, we utilize the `color` property with the `copy` function on `Color.Red`. The `alpha` parameter within `copy` sets the transparency level.

An alpha of `1f` means fully opaque, while `0f` is fully transparent. Here, we’ve set it to `0.5f`, making our text semi-transparent.

![jetpack compose text opacity](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-text-opacity-461x1024.png?ezimgfmt=rs:276x614/rscb1/ng:webp/ngcb1)

### Text Background

Backgrounds play a pivotal role in highlighting text and making it more legible against diverse backdrops. In Jetpack Compose, we can easily assign backgrounds to your text.

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

```
@Composable
fun TextExample() {
    Text(
        text = "Highlighted Text",
        style = TextStyle(
            fontSize = 24.sp,
            background = Color.Yellow
        )
    )
}
```

Within `[TextStyle](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/TextStyle)`, there’s the `background` property. Here, we’ve chosen `Color.yellow` to give our text a yellow background.

![jetpack compose text background](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-text-background-color-461x1024.png?ezimgfmt=rs:260x578/rscb1/ng:webp/ngcb1)

## Combine Styles

Combining styles is a powerful way to create standout and expressive text designs. With Jetpack Compose, mixing various text attributes is both intuitive and effective.

### Combine Font Styles

Let’s start by combining basic font styles, such as bold and italic:

```
Text(
    "Bold & Italic Text", 
    fontWeight = FontWeight.Bold, 
    fontStyle = FontStyle.Italic
)
```

This results in text that’s both bold and italicized, perfect for grabbing attention.

![jetpack compose combine text style](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-combine-text-style-461x1024.png?ezimgfmt=rs:278x618/rscb1/ng:webp/ngcb1)

### Multiple Styles in Text

In Jetpack Compose, you might want to style different parts of your text differently within a single `Text` composable. This can be achieved using an `[AnnotatedString](https://codingwithrashid.com/create-annotatedstring-in-android-jetpack-compose/)`, which is essentially a string that can be adorned with varied styles.

For creating an `AnnotatedString` with multiple styles, the `buildAnnotatedString` builder comes in handy.

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

```
@Composable
fun TextExample() {
    Text(
        buildAnnotatedString {
            withStyle(style = SpanStyle(color = Color.Blue)) {
                append("H")
            }
            append("ello ")
            withStyle(style = SpanStyle(fontWeight = FontWeight.Bold, color = Color.Red)) {
                append("W")
            }
            append("orld")
        },
        fontSize = 40.sp,
    )
}
```

Inside the builder, `withStyle` allows us to apply a specific `[SpanStyle](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/SpanStyle)` to a portion of the text.

The result? Our text will display as “H” in blue, followed by “ello “, and then “W” in bold red, ending with “orld”.

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

![jetpack compose multiple style in text](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-multiple-style-in-text-461x1024.png?ezimgfmt=rs:272x604/rscb1/ng:webp/ngcb1)

Combining multiple styles in this manner lets you craft more engaging and informative textual UIs.

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

### Multiple Decorations

Why limit yourself to just one text decoration when you can have more?

```
Text(
    "Underlined & Strikethrough", 
    textDecoration = TextDecoration.combine(listOf(TextDecoration.Underline, TextDecoration.LineThrough))
)
```

Here, we’ve combined underlining with a strikethrough, creating a unique visual cue.

![jetpack compose multiple decoration](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-multiple-decoration-461x1024.png?ezimgfmt=rs:282x626/rscb1/ng:webp/ngcb1)

## Text Alignment

Text alignment determines the arrangement of text relative to a reference point or line. Proper alignment enhances readability and aesthetic appeal. Jetpack Compose provides versatile tools to achieve your desired text alignment with ease.

### Left Alignment

By default, text in Jetpack Compose is left-aligned. It starts from the left edge and moves to the right:

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

```
Text("This is left-aligned text", textAlign = TextAlign.Left)
```

Left alignment is standard for most written content, especially in left-to-right languages.

### Center Alignment

For titles or when you wish to draw attention to specific text, center alignment is ideal:

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

```
Text("Centered Text", textAlign = TextAlign.Center)
```

The text will be perfectly centered relative to its container.

### Right Alignment

Right alignment is especially useful for languages that are read from right to left, or for specific design choices:

```
Text("Right-aligned Text", textAlign = TextAlign.Right)
```

The text starts from the right edge and extends to the left.

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

![jetpack compose text alignment](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-text-alignment-461x1024.png?ezimgfmt=rs:279x620/rscb1/ng:webp/ngcb1)

### Justify Alignment

For a more uniform look, especially in larger blocks of text, you might opt for justify alignment. This ensures even spacing between words, making both the left and right edges straight:

```
Text("This is a sample justified text. It ensures that both edges align neatly.", textAlign = TextAlign.Justify)
```

It’s essential to choose an alignment that complements the content and design of your app. Remember, while alignment contributes to aesthetics, readability should always be the priority.

## Text Spacing

Effective text spacing can dramatically enhance readability and the overall look of your app’s content. Jetpack Compose offers a suite of tools to help developers finely tune spacing, ensuring text is presented clearly and appealingly.

### Line Spacing

Adjusting the [space between lines](https://codingwithrashid.com/how-to-change-line-height-of-text-in-android-jetpack-compose/) can help improve the flow and legibility of paragraphs:

```
Text("This is a sample text with\nmultiple lines.", lineHeight = 28.sp)
```

By using the `lineHeight` property, you can set a specific height for each line, which includes the text height and the space above and below it.

![jetpack compose text line spacing](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-text-line-spacing-461x1024.png?ezimgfmt=rs:247x548/rscb1/ng:webp/ngcb1)

### Letter Spacing

To modify the space between individual characters, use [letter spacing](https://codingwithrashid.com/how-to-change-text-letter-spacing-in-android-jetpack-compose/):

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

```
Text("Spaced Out Text", letterSpacing = 1.5.sp)
```

With the `letterSpacing` property, characters in the text will have increased space between them, which can create a distinctive appearance or improve readability in certain fonts.

![jetpack compose letter spacing](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22461%22%20height=%221024%22%3E%3C/svg%3E)

When adjusting text spacing, always remember the user experience. Over-spacing or under-spacing can reduce readability. Testing on various devices and screen sizes will help strike the perfect balance.

## Text Line Limit and Truncation

Managing the display of lengthy textual content is crucial for maintaining a clean and user-friendly interface. Jetpack Compose provides straightforward methods to limit lines and truncate text, ensuring your UI remains tidy and readers aren’t overwhelmed.

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

### Line Limit

You can easily set a maximum number of lines for your text to occupy. This is especially useful for previews or brief snippets:

```
    Text("This is a long piece of text that may not fit within two lines. Yiu have to check how this text is gonna end finally. See the difference", maxLines = 2)
```

By setting the `maxLines` property, the text will be cut off after the specified number of lines, ensuring it doesn’t dominate the screen.

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

![jetpack compose line limit](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-line-limit-461x1024.png?ezimgfmt=rs:256x568/rscb1/ng:webp/ngcb1)

### Text Truncation

When you’re limiting lines, you might also want to indicate to the user that there’s more content than what’s currently visible. Truncation comes in handy here:

```
Text("This is a long piece of text that may not fit within two lines. Yiu have to check how this text is gonna end finally. See the difference", maxLines = 2, overflow = TextOverflow.Ellipsis)
```

With the `TextOverflow.Ellipsis` value for the `overflow` property, any text exceeding the `maxLines` will be replaced with an ellipsis (`...`), signaling to users that the content continues.

![jetpack compose text truncation](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-text-truncation-461x1024.png?ezimgfmt=rs:263x584/rscb1/ng:webp/ngcb1)

## Text Selection

In interactive UIs, [allowing users to select text](https://codingwithrashid.com/how-to-make-text-selectable-in-android-jetpack-compose/) can enhance functionality, aiding in tasks like copying, sharing, or looking up information. Jetpack Compose simplifies the process of enabling text selection, ensuring both usability and a seamless user experience.

### Basic Text Selection

To make text selectable in Jetpack Compose, wrap your `Text` composable within a `SelectionContainer`:

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

```
@Composable
fun TextExample() {
    SelectionContainer {
        Text("This is a selectable text")
    }
}
```

With the `SelectionContainer`, any text inside becomes selectable. Users can tap and drag to select specific portions of the text, just like they would in native Android.

![jetpack compose selectable text](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-selectable-text-461x1024.png?ezimgfmt=rs:253x562/rscb1/ng:webp/ngcb1)

Providing text selection not only boosts interactivity but also ensures users can engage with content more effectively. Always consider the context and ensure text selection enhances, rather than disrupts, the user experience.

## Text Border

Borders can play a pivotal role in highlighting specific portions of text or adding a decorative element. In Jetpack Compose, you have the flexibility to add borders to your text, ensuring it stands out or aligns with your design theme.

![Ezoic](https://go.ezodn.com/utilcave_com/ezoicbwa.png "ezoic")

### Basic Text Border

Adding a simple border around your text is made easy with the use of the `Modifier.border`:

```
@Composable
fun TextExample() {
    Column {
        Text(
            text = "Text with Border",
            modifier = Modifier.border(1.dp, Color.Red, shape = RoundedCornerShape(4.dp))
        )
    }
}
```

In the above example, the text will be surrounded by a red border of `1.dp` thickness. The corners of the border are slightly rounded with a `4.dp` radius.

![jetpack compose text border](https://codingwithrashid.com/wp-content/uploads/2023/10/jetpack-compose-text-border-461x1024.png?ezimgfmt=rs:247x550/rscb1/ng:webp/ngcb1)

### Combine with Padding

To ensure your text doesn’t sit too close to its border, use padding:

```
@Composable
fun TextExample() {
    Column {
        Text(
            text = "Text with Border",
            modifier = Modifier
                        .border(1.dp, Color.Red, shape = RoundedCornerShape(4.dp))
                        .padding(8.dp)
        )
    }
}
```

The `Modifier.padding` ensures a gap between the text and its border, enhancing clarity and aesthetics.

Using borders thoughtfully can emphasize important information, enhance aesthetics, or guide users’ attention. However, it’s essential to ensure that borders complement the overall design and don’t overshadow the primary content.

Navigating text in Jetpack Compose is both fun and practical. This guide has showcased how easy it is to style, customize, and manage text in your apps. Remember, while design is essential, always keep your users in mind. Thanks for reading!


Advertisement: 0:07
# Working with images

bookmark_border

Learn how to work with images using these details:

-   [Loading images](https://developer.android.com/jetpack/compose/graphics/images/loading): Learn how to load an image from disk or the internet
-   [ImageBitmap versus ImageVector](https://developer.android.com/jetpack/compose/graphics/images/compare): Learn how to work with the two most common image formats, raster and vector.
-   [Material icons](https://developer.android.com/jetpack/compose/graphics/images/material): Learn about a convenient way to draw a single color icon on the screen, following Material Design 3 guidelines.
-   [Customize an image](https://developer.android.com/jetpack/compose/graphics/images/customize): Learn how to customize an image using properties of an Image composable.
-   [Custom painter](https://developer.android.com/jetpack/compose/graphics/images/custompainter): Learn about custom painter objects to additionally customize your image.
-   [Optimizing performance](https://developer.android.com/jetpack/compose/graphics/images/optimization): Learn about how to best work with images to avoid performance issues.
- 
# Compose modifiers

bookmark_border

Modifiers allow you to decorate or augment a composable. Modifiers let you do these sorts of things:

-   Change the composable's size, layout, behavior, and appearance
-   Add information, like accessibility labels
-   Process user input
-   Add high-level interactions, like making an element clickable, scrollable, draggable, or zoomable

Modifiers are standard Kotlin objects. Create a modifier by calling one of the [`Modifier`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier) class functions:

```
@Composable  
private fun Greeting(name: String) {    
	Column(modifier = Modifier.padding(24.dp)) {        
		Text(text = "Hello,")        
		Text(text = name)    
		}  
}
```

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L47-L53)

![Two lines of text on a colored background, with padding around the text.](https://developer.android.com/static/images/jetpack/compose/modifier-1-modifier.png)

You can chain these functions together to compose them:

@Composable  
private fun Greeting(name: String) {    Column(        modifier = Modifier            .padding(24.dp)            .fillMaxWidth()    ) {        Text(text = "Hello,")        Text(text = name)    }  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L59-L69)

![The colored background behind the text now extends the full width of the device.](https://developer.android.com/static/images/jetpack/compose/modifier-chained.png)

In the code above, notice different modifier functions used together.

-   `padding` puts space around an element.
-   `fillMaxWidth` makes the composable fill the maximum width given to it from its parent.

It's a best practice to have _all_ of your Composables accept a `modifier` parameter, and pass that modifier to its first child that emits UI. Doing so makes your code more reusable and makes its behavior more predictable and intuitive. For more information, see the Compose API guidelines, [Elements accept and respect a Modifier parameter](https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/docs/compose-api-guidelines.md#elements-accept-and-respect-a-modifier-parameter).

## Order of modifiers matters

The order of modifier functions is **significant**. Since each function makes changes to the `Modifier`returned by the previous function, the sequence affects the final result. Let's see an example of this:

@Composable  
fun ArtistCard(/*...*/) {    val padding = 16.dp    Column(        Modifier            .clickable(onClick = onClick)            .padding(padding)            .fillMaxWidth()    ) {        // rest of the implementation    }  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L77-L88)

![The entire area, including the padding around the edges, responds to clicks](https://developer.android.com/static/images/jetpack/compose/layout-padding-clickable.gif)

In the code above the whole area is clickable, including the surrounding padding, because the `padding` modifier has been applied _after_ the `clickable` modifier. If the modifiers order is reversed, the space added by `padding` does not react to user input:

@Composable  
fun ArtistCard(/*...*/) {    val padding = 16.dp    Column(        Modifier            .padding(padding)            .clickable(onClick = onClick)            .fillMaxWidth()    ) {        // rest of the implementation    }  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L96-L107)

![The padding around the edge of the layout no longer responds to clicks](https://developer.android.com/static/images/jetpack/compose/layout-padding-not-clickable.gif)

**Note:** The explicit order helps you to reason about how different modifiers will interact. Compare this to the view-based system where you had to learn the box model, that margins applied "outside" the element but padding "inside" it, and a background element would be sized accordingly. The modifier design makes this kind of behavior explicit and predictable, and gives you more control to achieve the exact behavior you want. It also explains why there is not a margin modifier but only a `padding` one.

## Built-in modifiers

Jetpack Compose provides a list of built-in modifiers to help you decorate or augment a composable. Here are some common modifiers you'll use to adjust your layouts.

**Note:** Many of these modifiers are designed to help you arrange your UI's layout just the way you need it. For more information about how modifiers work in your layout, see the [Compose layout basics](https://developer.android.com/jetpack/compose/layouts/basics) documentation.

### padding and size

By default, layouts provided in Compose wrap their children. However, you can set a size by using the `size` modifier:

@Composable  
fun ArtistCard(/*...*/) {    Row(        modifier = Modifier.size(width = 400.dp, height = 100.dp)    ) {        Image(/*...*/)        Column { /*...*/ }    }  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L113-L121)

Note that the size you specified might not be respected if it does not satisfy the constraints coming from the layout's parent. If you require the composable size to be fixed regardless of the incoming constraints, use the `requiredSize` modifier:

@Composable  
fun ArtistCard(/*...*/) {    Row(        modifier = Modifier.size(width = 400.dp, height = 100.dp)    ) {        Image(            /*...*/            modifier = Modifier.requiredSize(150.dp)        )        Column { /*...*/ }    }  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L127-L138)

![Child image is bigger than the constraints coming from its parent](https://developer.android.com/static/images/jetpack/compose/layout-requiredsize-new.png)

In this example, even with the parent `height` set to `100.dp`, the height of the `Image` will be `150.dp`, as the `requiredSize` modifier takes precedence.

**Note:** Layouts are based on constraints, and normally, the parent passes those constraints to the children. The child _should_ respect the constraints. However, that might not always be what the UI requires. There are ways to bypass this child behavior. For example, you can pass modifiers like `requiredSize` directly to the child, overriding the constraints received by the child from the parent, or you can use a custom layout with different behavior. When a child does not respect its constraints, the layout system will hide this from the parent. The parent will see the child's `width` and `height` values as if they were coerced in the constraints provided by the parent. The layout system will then center the child within the space allocated by the parent under the assumption that the child respected the constraints. Developers can override this centering behaviour by applying `wrapContentSize` modifiers to the child.

If you want a child layout to fill all the available height allowed by the parent, add the `fillMaxHeight` modifier (Compose also provides `fillMaxSize` and `fillMaxWidth`):

@Composable  
fun ArtistCard(/*...*/) {    Row(        modifier = Modifier.size(width = 400.dp, height = 100.dp)    ) {        Image(            /*...*/            modifier = Modifier.fillMaxHeight()        )        Column { /*...*/ }    }  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L144-L155)

![The image height is as big as its parent](https://developer.android.com/static/images/jetpack/compose/layout-fillmaxheight.png)

To add padding all around an element, set a `padding` modifier.

If you want to add padding above a text baseline such that you achieve a specific distance from the top of the layout to the baseline, use the `paddingFromBaseline` modifier:

@Composable  
fun ArtistCard(artist: Artist) {    Row(/*...*/) {        Column {            Text(                text = artist.name,                modifier = Modifier.paddingFromBaseline(top = 50.dp)            )            Text(artist.lastSeenOnline)        }    }  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L161-L172)

![Text with padding above it](https://developer.android.com/static/images/jetpack/compose/layout-paddingfrombaseline-new.png)

### Offset

To position a layout relative to its original position, add the `offset` modifier and set the offset in the **x** and **y** axis. Offsets can be positive as well as non-positive. The difference between `padding` and `offset` is that adding an `offset` to a composable does not change its measurements:

@Composable  
fun ArtistCard(artist: Artist) {    Row(/*...*/) {        Column {            Text(artist.name)            Text(                text = artist.lastSeenOnline,                modifier = Modifier.offset(x = 4.dp)            )        }    }  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L178-L189)

![Text shifted to the right side of its parent container](https://developer.android.com/static/images/jetpack/compose/layout-offset-new.png)

The `offset` modifier is applied horizontally according to the layout direction. In a **left-to-right** context, a positive `offset` shifts the element to the right, while in a **right-to-left** context, it shifts the element to the left. If you need to set an offset without considering layout direction, see the [`absoluteOffset`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#absoluteOffset(androidx.compose.ui.Modifier,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp)) modifier, in which a positive offset value always shifts the element to the right.

The `offset` modifier provides two overloads - [`offset`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#(androidx.compose.ui.Modifier).offset(androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp)) that takes the offsets as parameters and [`offset`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#(androidx.compose.ui.Modifier).offset(kotlin.Function1)) that takes in a lambda. For more in depth information on when to use each of these and how to optimize for performance, read through the [Compose performance - Defer reads as long as possible](https://developer.android.com/jetpack/compose/performance#defer-reads) section.

## Scope safety in Compose

In Compose, there are modifiers that can only be used when applied to children of certain composables. Compose enforces this by means of custom scopes.

For example, if you want to make a child as big as the parent `Box` without affecting the `Box` size, use the [`matchParentSize`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/BoxScope#(androidx.compose.ui.Modifier).matchParentSize()) modifier. `matchParentSize` is only available in [`BoxScope`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/BoxScope). Therefore, it can only be used on a child within a `Box` parent.

Scope safety prevents you from adding modifiers that wouldn't work in other composables and scopes and saves time from trial and error.

**Note:** In the Android View system, there is no scope safety. Developers usually find themselves trying out different layout params to discover which ones are considered and their meaning in the context of a particular parent.

Scoped modifiers notify the parent about some information the parent should know about the child. These are also commonly referred to as _parent data modifiers_. Their internals are different from the general purpose modifiers, but from a usage perspective, these differences don't matter.

### matchParentSize in Box

As mentioned above, if you want a child layout to be the same size as a parent `Box` without affecting the `Box` size, use the `matchParentSize` modifier.

Note that `matchParentSize` is only available within a `Box` scope, meaning that it only applies to _direct_ children of `Box` composables.

In the example below, the child `Spacer` takes its size from its parent `Box`, which in turn takes its size from the biggest children, `ArtistCard` in this case.

@Composable  
fun MatchParentSizeComposable() {    Box {        Spacer(            Modifier                .matchParentSize()                .background(Color.LightGray)        )        ArtistCard()    }  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L195-L205)

![Gray background filling its container](https://developer.android.com/static/images/jetpack/compose/layout-matchparentsize-new.png)

If `fillMaxSize` were used instead of `matchParentSize`, the `Spacer` would take all the available space allowed to the parent, in turn causing the parent to expand and fill all the available space.

![Gray background filling the screen](https://developer.android.com/static/images/jetpack/compose/layout-fillmaxsize.png)

### weight in Row and Column

As you have seen in the previous section on [Padding and size](https://developer.android.com/jetpack/compose/modifiers#padding-and-size), by default, a composable size is defined by the content it is wrapping. You can set a composable size to be flexible within its parent using the `weight` Modifier that is only available in `RowScope`, and `ColumnScope`.

Let’s take a `Row` that contains two `Box` composables. The first box is given twice the `weight` of the second, so it's given twice the width. Since the `Row` is `210.dp` wide, the first `Box` is `140.dp` wide, and the second is `70.dp`:

@Composable  
fun ArtistCard(/*...*/) {    Row(        modifier = Modifier.fillMaxWidth()    ) {        Image(            /*...*/            modifier = Modifier.weight(2f)        )        Column(            modifier = Modifier.weight(1f)        ) {            /*...*/        }    }  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L211-L226)

![The image width is twice text width](https://developer.android.com/static/images/jetpack/compose/layout-weight.png)

## Extracting and reusing modifiers

Multiple modifiers can be chained together to decorate or augment a composable. This chain is created via the [`Modifier`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier) interface which represents an ordered, immutable list of single [`Modifier.Elements`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier.Element).

Each `Modifier.Element` represents an individual behavior, like layout, drawing and graphics behaviors, all gesture-related, focus and semantics behaviors, as well as device input events. Their ordering matters: modifier elements that are added first will be applied first.

Sometimes it can be beneficial to reuse the same modifier chain instances in multiple composables, by extracting them into variables and hoisting them into higher scopes. It can improve code readability or help improve your app's performance for a few reasons:

-   The re-allocation of the modifiers won’t be repeated when recomposition occurs for composables that use them
-   Modifier chains could potentially be very long and complex, so reusing the same instance of a chain can alleviate the workload Compose runtime needs to do when comparing them
-   This extraction promotes code cleanliness, consistency and maintainability across the codebase

### Best practices for reusing modifiers

Create your own `Modifier` chains and extract them to reuse them on multiple composable components. It is completely fine to just save a modifier, as they are data-like objects:

val reusableModifier = Modifier    .fillMaxWidth()    .background(Color.Red)    .padding(12.dp)

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L232-L235)

#### Extracting and reusing modifiers when observing frequently changing state

When observing frequently changing states inside composables, like animation states or `scrollState`, there can be a significant amount of recompositions done. In this case, your modifiers will get allocated on every recomposition and potentially for every frame:

@Composable  
fun LoadingWheelAnimation() {    val animatedState = animateFloatAsState(/*...*/)    LoadingWheel(        // Creation and allocation of this modifier will happen on every frame of the animation!        modifier = Modifier            .padding(12.dp)            .background(Color.Gray),        animatedState = animatedState    )  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L241-L252)

Instead, you can create, extract and reuse the same instance of the modifier and pass it to the composable like this:

// Now, the allocation of the modifier happens here:  
val reusableModifier = Modifier    .padding(12.dp)    .background(Color.Gray)  
  
@Composable  
fun LoadingWheelAnimation() {    val animatedState = animateFloatAsState(/*...*/)    LoadingWheel(        // No allocation, as we're just reusing the same instance        modifier = reusableModifier,        animatedState = animatedState    )  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L258-L272)

#### Extracting and reusing unscoped modifiers

Modifiers can be unscoped or scoped to a specific composable. In the case of unscoped modifiers, you can easily extract them outside of any composables as simple variables:

val reusableModifier = Modifier    .fillMaxWidth()    .background(Color.Red)    .padding(12.dp)  
  
@Composable  
fun AuthorField() {    HeaderText(        // ...        modifier = reusableModifier    )    SubtitleText(        // ...        modifier = reusableModifier    )  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L278-L293)

This can be especially beneficial when combined with Lazy layouts. In most cases, you’d want all of your, potentially significant, amount of items to have the exact same modifiers:

val reusableItemModifier = Modifier    .padding(bottom = 12.dp)    .size(216.dp)    .clip(CircleShape)  
  
@Composable  
private fun AuthorList(authors: List<Author>) {    LazyColumn {        items(authors) {            AsyncImage(                // ...                modifier = reusableItemModifier,            )        }    }  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L299-L314)

#### Extracting and reusing scoped modifiers

When dealing with modifiers that are scoped to certain composables, you can extract them to the highest possible level and reuse where appropriate:

Column(/*...*/) {    val reusableItemModifier = Modifier        .padding(bottom = 12.dp)        // Align Modifier.Element requires a ColumnScope        .align(Alignment.CenterHorizontally)        .weight(1f)    Text1(        modifier = reusableItemModifier,        // ...    )    Text2(        modifier = reusableItemModifier        // ...    )    // ...  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L321-L336)

You should only be passing the extracted, scoped modifiers to the same-scoped, direct children. See the section [Scope safety in Compose](https://developer.android.com/jetpack/compose/modifiers#scope-safety) for more reference on why this matters:

Column(modifier = Modifier.fillMaxWidth()) {    // Weight modifier is scoped to the Column composable    val reusableItemModifier = Modifier.weight(1f)    // Weight will be properly assigned here since this Text is a direct child of Column    Text1(        modifier = reusableItemModifier        // ...    )    Box {        Text2(            // Weight won't do anything here since the Text composable is not a direct child of Column            modifier = reusableItemModifier            // ...        )    }  
}

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L343-L360)

#### Further chaining of extracted modifiers

You can further chain or append your extracted modifier chains by calling the [`.then()`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier#then(androidx.compose.ui.Modifier)) function:

val reusableModifier = Modifier    .fillMaxWidth()    .background(Color.Red)    .padding(12.dp)  
  
// Append to your reusableModifier  
reusableModifier.clickable { /*...*/ }  
  
// Append your reusableModifier  
otherModifier.then(reusableModifier)

[ModifierSnippets.kt](https://github.com/android/snippets/blob/4685568346a1f2e05f8e24e7d157520c46a075e8/compose/snippets/src/main/java/com/example/compose/snippets/modifiers/ModifierSnippets.kt#L372-L381)


## **Compose layout basics**

Layouts in Jetpack Compose are essential for organizing UI elements. They define how components are positioned and sized within your screen.

Now, start a new Project:

-   Open Android Studio and select **Start a new Android Studio project.**
    
-   Choose **Empty Compose Activity from the available templates.**
    
-   Click **Next** and configure your project as usual, calling it as you wish. **I will be naming my app "ChatItem".**
    

### [](https://codewithmitch.hashnode.dev/a-guide-to-layouts-modifiers-and-ui-components-in-jetpack-compose#heading-the-composable-function-the-heart-of-compose-layouts "Permalink")**The Composable Function: The Heart of Compose Layouts**

At the core of Jetpack Compose lies the Composable function. It's the fundamental building block for creating UI elements in your Android app. A Composable function is a lightweight, reusable piece of code that describes a part of your user interface. Below is our MessageCard composable function without any layouts and modifiers. We are using a data class to store our card's title and message.

COPY

COPY

```
data class ChatItems(
    val title: String,
    val message: String
)

@Composable
fun MessageCard(item: ChatItems) {
    Image(
        painter = painterResource(id = R.drawable.avatar ),
        contentDescription = "profile image" )
    Text(
        text = item.title
    )
    Text(
        text = item.message
    )
}
```

The preview will look something like this. I am using an avatar image from [Pixabay](https://pixabay.com/vectors/avatar-beak-black-cute-emotion-1295397/).

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694761408834/7ccff66f-9bd1-4eea-8fda-340dd73bb8d0.png?auto=compress,format&format=webp)

Without guidance on how you want the elements arranged, Compose stacks the `Text`, and the `Image` elements hierarchically on top of each other, making them unreadable.

### [](https://codewithmitch.hashnode.dev/a-guide-to-layouts-modifiers-and-ui-components-in-jetpack-compose#heading-arranging-ui-elements-with-layouts "Permalink")**Arranging UI Elements with Layouts**

Layouts in Compose are essential for organizing UI elements on the screen. Compose provides a variety of layout components, each designed for specific use cases.

Some basic layout components include:

-   `Column`: Stacks UI elements vertically, one on top of another.
    
-   `Row`: Arrange UI elements horizontally, side by side.
    
-   `Box`: Allows for overlaying UI elements, enabling creative compositions.
    
-   `Surface`: Creates a rectangular area with optional elevation (shadow) and rounded corners.
    

We will cover more layout components in future articles so stay tuned. At the moment let us cover the most commonly used layouts.

### [](https://codewithmitch.hashnode.dev/a-guide-to-layouts-modifiers-and-ui-components-in-jetpack-compose#heading-using-a-column-layout "Permalink")Using a Column layout

Let's add the `column` function to the `MessageCard` function in our previous code and don't forget to make necessary imports. We will be commenting on the image composable for a better preview of the column function.

COPY

COPY

```
@Composable
fun MessageCard(item: ChatItems) {
//    Image(
//        painter = painterResource(id =R.drawable.avatar ),
//        contentDescription = "profile image" )
    Column {
        Text(
            text = item.title
        )
        Text(
            text = item.message
        )
    }
}
```

This will arrange the two text composables vertically, this is the arrangement we want for the texts and not like before when they were stacked on top of each other.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694767465450/c4ce573f-f616-4205-beba-62517eec9c67.png?auto=compress,format&format=webp)

### [](https://codewithmitch.hashnode.dev/a-guide-to-layouts-modifiers-and-ui-components-in-jetpack-compose#heading-using-a-row-layout "Permalink")Using a Row Layout

First, Comment out the `Image` element so that the `MessageCard` can have a profile picture. Add the `Row` Function to the `MesssageCard` composable like in the code snippet below.

COPY

COPY

```
@Composable
fun MessageCard(item: ChatItems) {
    Row {
        Image(
            painter = painterResource(id = R.drawable.avatar),
            contentDescription = "profile image"
        )
        Column {
            Text(
                text = item.title
            )
            Text(
                text = item.message
            )
        }
    }
}
```

After finishing your project, it should look similar to this.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695376643284/a6cf8b59-3c66-4d82-a582-f2cdb87c4997.png?auto=compress,format&format=webp)

## [](https://codewithmitch.hashnode.dev/a-guide-to-layouts-modifiers-and-ui-components-in-jetpack-compose#heading-modifiers "Permalink")Modifiers

Modifiers enable you to modify a composable's size, arrangement, and visual attributes, or introduce advanced interactions, like making an element clickable.

The layout created has the correct structure, but there are issues with the spacing between elements, and the image appears too large. To adjust the appearance or configuration of a composable, Compose utilizes `modifiers`.

### [](https://codewithmitch.hashnode.dev/a-guide-to-layouts-modifiers-and-ui-components-in-jetpack-compose#heading-configuring-layouts "Permalink")Configuring Layouts

Use the Modifier element to `size` down and `clip` the image to your preference. Declare the preferred size of the image to be exactly `40.dp` square and then clip the image to a `CircleShape`.

COPY

COPY

```
@Composable
fun MessageCard(item: ChatItems) {

    Row {
        Image(
            painter = painterResource(id = R.drawable.avatar),
            contentDescription = "profile image",
            modifier = Modifier
                // Set image size to 40 dp
                .size(40.dp)
                // Clip image within our defined shape
                .clip(CircleShape)
        )
        Column {
            Text(
                text = item.title
            )
            Text(
                text = item.message
            )
        }
    }
}
```

Here's the preview of the final output:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695379428142/9b91da3c-1dbe-4ebe-9454-0b2c25345025.png?auto=compress,format&format=webp)

The message card still has some issues with the spacing, but we will fix this using the `Modifier.padding`.

COPY

COPY

```
@Composable
fun MessageCard(item: ChatItems) {

    Row (modifier = Modifier.padding(8.dp)){
        Image(
            painter = painterResource(id = R.drawable.avatar),
            contentDescription = "profile image",
            modifier = Modifier
                // Set image size to 40 dp
                .size(40.dp)
                // Clip image within our defined shape
                .clip(CircleShape)
        )
        //add space of width 8.dp using Spacer composable
        Spacer(modifier = Modifier.width(8.dp))
        Column {
            Text(
                text = item.title
            )
            Text(
                text = item.message
            )
        }
    }
}
```

This is the output.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695380429046/697f8320-a33b-47c4-90ae-7fbc08fca0e6.png?auto=compress,format&format=webp)

The message card looks good but not yet great. To enhance the aesthetic appeal of our card, we can employ the material design by applying color, typography, and shape. If you're not familiar with material design, it's recommended to check out the previous article on [Theming](https://hashnode.com/post/cllwps95e000909m74bl811no) to get up to speed.

This is the final version.

COPY

COPY

```
@Composable
fun MessageCard(item: ChatItems) {

    Row (modifier = Modifier.padding(8.dp)){
        Image(
            painter = painterResource(id = R.drawable.avatar),
            contentDescription = "profile image",
            modifier = Modifier
                // Set image size to 40 dp
                .size(40.dp)
                // Clip image within our defined shape
                .clip(CircleShape)
                //creates a circular border around the image
                //and color is set to primary color
                .border(1.5.dp, MaterialTheme.colorScheme.primary, CircleShape)
        )
        //add space of width 8.dp using Spacer composable
        Spacer(modifier = Modifier.width(8.dp))
        Column {
            Text(
                text = item.title,
                //set style to title small from the material theme
                style = MaterialTheme.typography.titleSmall
            )
            Text(
                text = item.message,
                //set color of the text to secondary from the material theme
                color = MaterialTheme.colorScheme.secondary,
                //set the style to a body medium from the material theme
                style = MaterialTheme.typography.bodyMedium
            )
        }
    }
}

/*This @Preview annotation defines 
a preview of the MessageCard 
Composable in light mode
 */
@Preview(
    showBackground = true,
    name = "Light Mode"
) 
@Preview(
    //indicates that this is a dark mode preview
    uiMode = Configuration.UI_MODE_NIGHT_YES,
    //sets name of this preview
    name = "Dark Mode"
)
@Composable
fun MessageCardPreview() {
    ChatItemTheme {
        MessageCard()
    }
}
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695631532654/98b1a373-912e-4f21-99e5-61a76c40fd0d.png?auto=compress,format&format=webp)

Learn more about Theming - read this [article](https://hashnode.com/post/cllwps95e000909m74bl811no)!
# Pronunciation Dictionary Generator

## Overview

This Node.js script, written in TypeScript, automates the creation of a pronunciation dictionary in the .pls format. It is specifically designed to enhance text-to-speech (TTS) applications like Eleven Labs by providing accurate pronunciations for numbers and year dates. The script generates pronunciations for:

- Numbers between 100 and 999.
- Year dates between 1000 and 2099.
- German only at the moment.
- Other languages are easily possible with your contribution.

The output .pls files can be easily integrated with various TTS engines to improve the naturalness and clarity of spoken numbers and dates.

## download .pls for German
Here: [/]()


## Features

- **Automated Pronunciation Rules:** Applies consistent pronunciation rules for numbers and dates, ensuring clarity and naturalness in TTS applications.
- **.pls Format Output:** Generates dictionary files in the widely supported .pls format, facilitating easy integration with TTS engines.
- **Customizable:** Open to modifications and extensions to cover additional linguistic patterns or languages.


## Prerequisites

- Node.js
- TypeScript

## Installation

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.11. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.



## Contributing
We welcome contributions to make this script even better and more versatile! Whether you're looking to improve the existing script, add support for more languages, or enhance functionality, your input is invaluable. Here's how you can contribute:

Fork the Repository: Create your own fork and work on enhancements or new features.
Submit Pull Requests: If you've developed an improvement or added new capabilities, please submit a pull request with a clear description of your changes.
Feedback and Suggestions: Not ready to code? We still value your ideas and suggestions. Feel free to open an issue with your feedback.
Together, we can make this tool useful for others TTS users.

License
This project is open source and available under the MIT License.
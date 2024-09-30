# Screenshot NextJS

Screenshot NextJS is a powerful and flexible web application built with Next.js, designed to capture and manage screenshots efficiently. This project leverages modern web technologies and cloud services to provide a robust solution for screenshot capture and storage.

## Features

- Screenshot capture functionality
- AWS S3 integration for image storage
- User authentication and authorization
- Responsive design using Tailwind CSS
- Server-side rendering with Next.js

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [AWS SDK](https://aws.amazon.com/sdk-for-javascript/) - For interacting with AWS services
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- [Puppeteer](https://pptr.dev/) - Headless Chrome Node.js API for screenshot capture

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/screenshot-nextjs.git
   cd screenshot-nextjs
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the necessary environment variables (refer to `.env.example` if provided).

4. Run the development server:

   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows the standard Next.js structure with some additional directories:

- `app/`: Contains the main application code
- `components/`: Reusable React components
- `lib/`: Utility functions and helpers
- `prisma/`: Prisma schema and migrations
- `public/`: Static assets

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Vercel](https://vercel.com) for hosting and deployment
- [AWS](https://aws.amazon.com) for cloud services
- All the amazing open-source libraries and tools used in this project

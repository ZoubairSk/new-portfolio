export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Zubayr Skirej. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

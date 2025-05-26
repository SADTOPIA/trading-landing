import '../i18n';
import "@/app/globals.css";
import I18nProvider from '@/components/features/I18nProvider/I18nProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head />
    <body>
    <I18nProvider>
      {children}
    </I18nProvider>
    </body>
    </html>
  );
}

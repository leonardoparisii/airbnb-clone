import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import { RegisterModal } from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from '@/app/components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal/RentModal';

const font = Nunito({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone Project',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
          <ToasterProvider />
          <LoginModal />
          <RentModal />
          <RegisterModal />
          <Navbar currentUser={currentUser}/>
          {children}
      </body>
    </html>
  )
}

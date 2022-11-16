// import { LoginFooter } from '../../components/Footers/LoginFooter';
// import { LoginForm } from '../../components/Forms/LoginForm';
// import { LoginNavbar } from '../../components/Navbars/LoginNavbar';
import { Sidebar } from '../../components/Navbars/Sidebar';

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      {/* <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/images/login-background.png')",
            }}
          />

          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <LoginForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <LoginFooter /> */}
    </>
  );
}

//import components
import { LoginForm, FormLayout } from "..";

const Login = () => {
  return (
    <section>
      <div className=" md:min-h-screen items-center flex flex-col xs:flex-row flex-wrap mx-0 mb-7 sm:mb-0">
        {/* col left start */}
        <FormLayout />

        {/* col right start */}
        <div className="  flex items-center mx-auto flex-col relative ">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;

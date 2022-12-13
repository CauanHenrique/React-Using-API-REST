import { FormInclude } from "../Components/Fromularios/FormInclude";
import { Menu } from "../Components/Menu/Menu";

export const PagInclude = ()  =>{
    return (
      <section  >
        <div className="sidenav">
          {/* <Menu/> */}
        </div>
        <div className='main campo-texto Form' >
          <FormInclude />
        </div>
      </section>
    );
  }
  
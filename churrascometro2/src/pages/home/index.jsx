import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Header } from "../../components/header";

const formDefaultValue = {
  name: "",
  email: "",
  cep: "",
  terms: false,
};

export const Homepage = () => {
  const navigate = useNavigate();
  const { set, get } = useLocalStorage();
  const [form, setForm] = useState(formDefaultValue);

  const handleChangeInput = (e) => {
    const { name, value, checked } = e.target;
    if (name === "terms") {
      setForm({ ...form, [name]: checked });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    set("form_user", JSON.stringify(form));
    navigate("/pessoas");
  };

  useEffect(() => {
    const formUser = get("form_user");
    if (formUser) {
      try {
        setForm(JSON.parse(formUser));
      } catch (error) {
        setForm(formDefaultValue);
      }
    }
  }, [get]);

  return (
    <div className="container">
      <Header />
      <form className="global_form main_form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            onChange={handleChangeInput}
            value={form.name}
            type="text"
            name="name"
            className="form_input input_name"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            onChange={handleChangeInput}
            value={form.email}
            type="email"
            name="email"
            className="form_input input_email"
            id="email"
            required
          />
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <input
            onChange={handleChangeInput}
            value={form.cep}
            type="number"
            name="cep"
            className="form_input input_cep"
            id="cep"
            required
          />
        </div>
        <div>
          <label htmlFor="terms">Aceito receber e-mails com promoções</label>
          <input
            onChange={handleChangeInput}
            type="checkbox"
            name="terms"
            id="terms"
            className="form_input input_terms"
            checked={form.terms}
          />
        </div>
        <button type="submit" className="btn_submit">
          Confirmar
        </button>
      </form>
    </div>
  );
};

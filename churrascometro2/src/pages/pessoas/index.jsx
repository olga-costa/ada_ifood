import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { CounterCard } from "../../components/CounterCard";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./styles.css";
const formDefaultValue = {
  woman: 0,
  man: 0,
  children: 0,
  drinking: 0,
};
export const Pessoas = () => {
  const [form, setForm] = useState(formDefaultValue);
  const navigate = useNavigate();
  const { set } = useLocalStorage();

  const decrement = (name) => {
    setForm({ ...form, [name]: form[name] - 1 });
  };

  const increment = (name) => {
    setForm({ ...form, [name]: form[name] + 1 });
  };

  const submit = () => {
    if (!form.man && !form.woman) {
      return alert("O churrasco deve ter ao menos 1 pessoa adulta");
    }
    set("people_form", JSON.stringify(form));
    navigate("/resultado");
  };

  return (
    <div className="container people_container">
      <Header />
      <div className="cards">
        <CounterCard
          title="Mulheres"
          onDecrement={() => {
            if (form.woman > 0) {
              decrement("woman");
            }
          }}
          onIncrement={() => increment("woman")}
          value={form.woman}
        />
        <CounterCard
          title="Homens"
          onDecrement={() => {
            if (form.man > 0) {
              decrement("man");
            }
          }}
          onIncrement={() => increment("man")}
          value={form.man}
        />
        <CounterCard
          title="Crianças"
          onDecrement={() => {
            if (form.children > 0) {
              decrement("children");
            }
          }}
          onIncrement={() => increment("children")}
          value={form.children}
        />
        <CounterCard
          title="Adultos bebendo"
          onDecrement={() => {
            if (form.drinking > 0) {
              decrement("drinking");
            }
          }}
          onIncrement={() => increment("drinking")}
          value={form.drinking}
        />
      </div>
      <button className="btn_submit people_submit" onClick={submit}>
        Confirmar
      </button>
    </div>
  );
};

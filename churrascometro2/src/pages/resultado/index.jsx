import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./styles.css";
import { Header } from "../../components/header";

const formPeopleDefaultValue = {
  woman: 0,
  man: 0,
  children: 0,
};
export const Result = () => {
  const navigate = useNavigate();
  const { get, clear } = useLocalStorage();
  const [peoples, setPeoples] = useState(formPeopleDefaultValue);
  useEffect(() => {
    const peopleValues = get("people_form");
    if (peopleValues) {
      try {
        setPeoples(JSON.parse(peopleValues));
      } catch (error) {
        setPeoples(formPeopleDefaultValue);
      }
    }
  }, [get]);
  const man = Number(peoples.man);
  const woman = Number(peoples.woman);
  const children = Number(peoples.children);
  const drinking = Number(peoples.drinking);
  const totalPeople = man + woman + children;

  const manMeat = man * 0.4;
  const womanMeat = woman * 0.32;
  const childrenMeat = children * 0.2;

  const manGarlicBread = man;
  const womanGarlicBread = woman;
  const childrenGarlicBread = children;

  const totalMeat = manMeat + womanMeat + childrenMeat;
  const totalGarlicBread =
    manGarlicBread + womanGarlicBread + childrenGarlicBread;
  const totalSalt = totalPeople * 0.04;
  const totalCoal = totalPeople;
  const totalIce = totalPeople / 2;
  const totalSoda = totalPeople / 2.5;
  const totalWater = totalPeople / 5;
  const totalBeer = drinking * 3;

  const reset = () => {
    clear();
    navigate("/");
  };

  return (
    <div className="container result_container">
      <Header />
      <table className="result_table">
        <thead>
          <tr>
            <th>Carne</th>
            <th>Pão de alho</th>
            <th>Carvão</th>
            <th>Sal grosso</th>
            <th>Gelo</th>
            <th>Refrigerante</th>
            <th>Água</th>
            <th>Cerveja</th>
          </tr>
        </thead>
        <tbody className="table_body">
          <tr className="table_row">
            <td>
              <p className="table_cell">{totalMeat.toFixed(2)} KG</p>
            </td>
            <td>
              <p className="table_cell">{totalGarlicBread}</p>
            </td>
            <td>
              <p className="table_cell">{totalCoal}KG</p>
            </td>
            <td>
              <p className="table_cell">{totalSalt.toFixed(2)}KG</p>
            </td>
            <td>
              <p className="table_cell">{totalIce.toFixed(2)}KG</p>
            </td>
            <td>
              <p className="table_cell">{totalSoda.toFixed(2)}L</p>
            </td>
            <td>
              <p className="table_cell">{totalWater.toFixed(2)}</p>
            </td>
            <td>
              <p className="table_cell">{(totalBeer * 0.6).toFixed(2)}L</p>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn_submit result_submit" onClick={reset}>
        Novo cálculo
      </button>
    </div>
  );
};

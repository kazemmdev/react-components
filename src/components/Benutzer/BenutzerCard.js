import React, { useState } from "react";
import styles from "./BenutzerCard.module.css";

const data = [
  {
    benutzer: "1000-1014",
    anrede: "Herr",
    nachname: "Benai",
    vorname: "Raschid",
    password: "12345",
    mail: "benai@example.de",
    anschrift: "Firma QFS GmbH",
    funktion: "Prufer",
  },
  {
    benutzer: "1000-1015",
    anrede: "Herr",
    nachname: "Benai 2",
    vorname: "Raschid",
    password: "12345",
    mail: "benai@example.de",
    anschrift: "Firma QFS GmbH",
    funktion: "Prufer",
  },
];

const BenutzerCard = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [anredeOption, setAnredeOption] = useState({
    isOpen: false,
    values: ["Herr", "Frau"],
  });
  const [funktionOption, setFunktionOption] = useState({
    key: "funktion",
    isOpen: false,
    values: ["Prufer"],
  });

  const setOptionValue = (name, select) => {
    if (selected && selected[name]) setSelected({ ...selected, [name]: select });
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.addButton}>
          <img src={require("../../assets/plus-small.svg").default} alt="plus" />
        </div>
        <div className="mr-6">Benutzer</div>
        <div className={styles.optionsWrapper}>
          <button
            type="button"
            className={styles.optionsInput}
            onClick={() => setOpen((state) => !state)}
          >
            {selected?.nachname}
            <span className={styles.optionsInputSvg}>
              <img src={require("../../assets/menu.svg").default} />
            </span>
          </button>
          <ul className={styles.optionsMenu + (open ? " block" : " hidden")}>
            {data.map((item) => (
              <li
                key={item.benutzer}
                className={styles.optionsItem}
                onClick={() => {
                  setOpen(false);
                  setSelected(data.find((x) => x.benutzer === item.benutzer));
                }}
              >
                {item.nachname}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.inputRow}>
          <div className={styles.inputName}>Benutzer</div>
          <div>{selected && selected.benutzer}</div>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputName}>Anrede</div>
          <div className={styles.optionsWrapper}>
            <button
              type="button"
              className={styles.optionsInput}
              onClick={() => setAnredeOption({ ...anredeOption, isOpen: !anredeOption.isOpen })}
            >
              {selected?.anrede}
              <span className={styles.optionsInputSvg}>
                <img src={require("../../assets/menu.svg").default} />
              </span>
            </button>
            <ul className={styles.optionsMenu + (anredeOption.isOpen ? " block" : " hidden")}>
              {anredeOption.values.map((item) => (
                <li
                  key={item}
                  className={styles.optionsItem}
                  onClick={() => {
                    setOptionValue("anrede", item);
                    setAnredeOption({ ...anredeOption, isOpen: false });
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputName}>Nachname</div>
          <input
            type="string"
            className={styles.inputField}
            placeholder="Nachname"
            value={selected?.nachname || ""}
            onChange={(e) => setSelected({ ...selected, nachname: e.target.value })}
          />
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputName}>Vorname</div>
          <input
            type="string"
            className={styles.inputField}
            placeholder="Vorname"
            value={selected?.vorname || ""}
            onChange={(e) => setSelected({ ...selected, vorname: e.target.value })}
          />
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputName}>Mail</div>
          <input
            type="string"
            className={styles.inputField}
            placeholder="Mail"
            value={selected?.mail || ""}
            onChange={(e) => setSelected({ ...selected, mail: e.target.value })}
          />
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputName}>Anschrift</div>
          <input
            type="string"
            className={styles.inputField}
            placeholder="Anschrift"
            value={selected?.anschrift || ""}
            onChange={(e) => setSelected({ ...selected, anschrift: e.target.value })}
          />
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputName}>Funktion</div>
          <div className={styles.optionsWrapper}>
            <button
              type="button"
              className={styles.optionsInput}
              onClick={() =>
                setFunktionOption({ ...funktionOption, isOpen: !funktionOption.isOpen })
              }
            >
              {selected?.funktion}
              <span className={styles.optionsInputSvg}>
                <img src={require("../../assets/menu.svg").default} />
              </span>
            </button>
            <ul className={styles.optionsMenu + (funktionOption.isOpen ? " block" : " hidden")}>
              {funktionOption.values.map((item) => (
                <li
                  key={item}
                  className={styles.optionsItem}
                  onClick={() => {
                    setOptionValue("funktion", item);
                    setFunktionOption({ ...funktionOption, isOpen: false });
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonError}>Läschen</button>
        <button className={styles.buttonInfo}>PW Reset</button>
        <button className={styles.buttonSuccess}>Speichern</button>
      </div>
    </div>
  );
};

export default BenutzerCard;

import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  Input,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import styles from "./BenutzerCard.module.css";

const data = [
  {
    benutzer: "1000-1014",
    andrede: "Herr",
    nachname: "Benai",
    vorname: "Raschid",
    password: "12345",
    mail: "benai@example.de",
    anschrift: "Firma QFS GmbH",
    funktion: "Prufer",
  },
];

const BenutzerCard = () => {
  const [selected, setSelected] = useState([]);

  return (
    <Card className={styles.card}>
      <CardContent>
        <Box className={styles.cardHeader}>
          <IconButton color="success">
            <Add />
          </IconButton>
          <Box>Benutzer</Box>
          <FormControl variant="standard" className={styles.input}>
            <Select displayEmpty className={styles.inputOption} onChange={(e) => setSelected(e.target.value)}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data &&
                data.map((item) => (
                  <MenuItem key={item.benutzer} value={item}>
                    {item.andrede + " " + item.nachname + " " + item.vorname}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
        <Box className={styles.inputs}>
          <Box className={styles.inputRow}>
            <Typography className={styles.inputName}>Benutzer</Typography>
            <Box>{selected && selected.benutzer}</Box>
          </Box>
          <Box className={styles.inputRow}>
            <Typography className={styles.inputName}>Anrede</Typography>
            <FormControl variant="standard" className={styles.inputOption}>
              <Select
                displayEmpty
                value={selected?.andrede ?? ""}
                onChange={(e) => setSelected({ ...selected, andrede: e.target.value })}
                className={styles.inputOptionSelect}
              >
                <MenuItem value="">
                  <em>Select an option</em>
                </MenuItem>
                <MenuItem value={"Herr"}>Herr</MenuItem>
                <MenuItem value={"Frau"}>Frau</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className={styles.inputRow}>
            <Typography className={styles.inputName}>Nachname</Typography>
            <Input value={selected?.nachname} className={styles.inputField} placeholder="Nachname" />
          </Box>
          <Box className={styles.inputRow}>
            <Typography className={styles.inputName}>Vorname</Typography>
            <Input value={selected?.vorname} className={styles.inputField} placeholder="Vorname" />
          </Box>
          <Box className={styles.inputRow}>
            <Typography className={styles.inputName}>Mail</Typography>
            <Input value={selected?.mail} className={styles.inputField} placeholder="Mail" />
          </Box>
          <Box className={styles.inputRow}>
            <Typography className={styles.inputName}>Anschrift</Typography>
            <Input value={selected.anschrift} className={styles.inputField} placeholder="Anschrift" />
          </Box>
          <Box className={styles.inputRow}>
            <Typography className={styles.inputName}>Funktion</Typography>
            <FormControl variant="standard" className={styles.inputOption}>
              <Select
                displayEmpty
                value={selected?.funktion ?? ""}
                onChange={(e) => setSelected({ ...selected, funktion: e.target.value })}
                className={styles.inputOptionSelect}
              >
                <MenuItem value="">
                  <em>Select an option</em>
                </MenuItem>
                <MenuItem value={"Prufer"}>Prufer</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box className={styles.actions}>
          <Button color="error" variant="contained" className={styles.button}>
            Läschen
          </Button>
          <Button color="info" variant="contained" className={styles.button}>
            PW Reset
          </Button>
          <Button color="success" variant="contained" className={styles.button}>
            Speichern
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BenutzerCard;

// import { useState } from 'react';
// import PropTypes from 'prop-types';
import s from './Form.module.css';
import { useForm, Controller } from "react-hook-form";
import { Button, Radio, FormControlLabel, RadioGroup, TextField } from '@material-ui/core';

function Form({ toggleScreens, setPlayers }) {
    const { handleSubmit, reset, control } = useForm();

    const formSubmit = (data) => {
        setPlayers(data);
        console.log(data);
        toggleScreens();
        reset();
    }

    return (
        <form autoComplete="on" onSubmit={handleSubmit(formSubmit)}>
            <Controller
                  name="namePlayer1"
                  control={control}
                  defaultValue=""
                as={<TextField rowsMax={1} label="Player1 Name" placeholder="Antonio" multiline variant="outlined" className={s.inputName} /> }
            />
            <Controller
                  name="namePlayer2"
                  control={control}
                  defaultValue=""
                  as={ <TextField rowsMax={1} label="Player2 Name" placeholder="Rozetta" multiline variant="outlined" className={s.inputName} /> }
            />

            <Controller
                name="player1Suit"
                control={control}
                defaultValue="X"
                as={
                    <RadioGroup aria-label="chooseSuit" name="chooseSuit" className={s.radioGroup} >
                      <FormControlLabel control={<Radio />} value="X" label="Player1 plays with X"/>
                      <FormControlLabel control={<Radio />} value="O" label="Player1 plays with O" />
                    </RadioGroup>
                }
            />
            <Button type="submit" color="primary" variant="contained" className={s.submitBtn} >Play</Button>
        </form>
    )
}

export default Form;
import React, { useState } from "react";
import { Modal, Button, Image } from "semantic-ui-react";
import Rock from "./assets/images/Rock.png";
import Scissors from "./assets/images/Scissors.png";
import Paper from "./assets/images/Paper.png";

function Rules() {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      style={{ backgroundColor: "#3b3f46", color: "#FED053" }}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={{ backgroundColor: "#FED053" }}>Rules</Button>}
    >
      <Modal.Header style={{ color: "#FED053", backgroundColor: "#3b3f46" }}>
        <h1>Rules of Rock, Paper, Scissors</h1>
      </Modal.Header>
      <Modal.Content style={{ backgroundColor: "#3b3f46" }}>
        <Modal.Description>
          <h2>Winner of the round is to be determined as follow:</h2>
          <h3>
            Rock breaks scissors and therefore rock wins over scissors. Rock
            loses agains paper.
            <Image src={Rock} size="mini" floated="left" />
          </h3>
          <h3>
            Scissors cut paper therefore scissors win over paper. Scissors lose
            agains rock.
            <Image src={Scissors} size="mini" floated="left" />
          </h3>

          <h3>
            Paper covers rock therefore paper wins over rock. Paper loses against
            scissors.
            <Image src={Paper} size="mini" floated="left" />
          </h3>
          <h2>
            If the player and computer make the same selection, there is a tie.
          </h2>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions style={{ backgroundColor: "#3b3f46" }}>
        <Button
          content="Close"
          labelPosition="right"
          icon="close"
          onClick={() => setOpen(false)}
          style={{ backgroundColor: "#FED053" }}
        />
      </Modal.Actions>
    </Modal>
  );
}

export default Rules;

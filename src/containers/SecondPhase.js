import React from "react";
import ScoreBoard from "../components/ScoreBoard";
import Picks from "../components/Picks";
import PlayAgain from "../components/PlayAgain";
import RulesButton from "../components/RulesButton";
import RulesModal from "../components/RulesModal";

export default function SecondPhase(props) {
  const { modalVisible, displayRulesModal, playerPick, computerPick } = props;
  return (
    <>
      <ScoreBoard />
      <Picks playerPick={playerPick} computerPick={computerPick} />
      <PlayAgain />
      <RulesButton onClickHandler={displayRulesModal} />
      {modalVisible && <RulesModal onClickHandler={displayRulesModal} />}
    </>
  );
}

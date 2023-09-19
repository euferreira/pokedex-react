import {Container} from "@mui/material";
import {v4 as uuidv4} from "uuid";
import TypeBadge from "../../badge/TypeBadge";
import {Pokemon} from "../../../models/pokemon.entity";
import "./Pokemon.card.scss";
import "./Background.scss";
import Pattern from "../../../assets/icons/Pattern.svg";
import Pokeball from "../../../assets/icons/Pokeball.svg";

interface PokemonCardProps {
    result: Pokemon;
}

export default function PokemonCard(props: PokemonCardProps) {
    return (
        <Container
            key={uuidv4()}
            className={`new-container background-type-${props.result.types[0].type.name}`}>
            <img src={Pattern} className="new-container__pattern" alt="pattern"/>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <div className="new-container__info">
                    <div className="new-container__info__id">#{props.result.order}</div>
                    <div className="new-container__info__name">{props.result.name}</div>
                    <div className="new-container__info__types">
                        <TypeBadge types={props.result.types}/>
                    </div>
                </div>
                <div className="new-container__imgs">
                    <img
                        src={Pokeball}
                        alt="Pokebola"
                        className="new-container__imgs__pokeball"
                    />
                    <img
                        src={props.result.sprites.front_default}
                        alt="Bulbasaur"
                        className="new-container__imgs__img"
                    />
                </div>
            </div>
        </Container>
    );
}

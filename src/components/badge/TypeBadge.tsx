import "./TypeBadge.scss";
import "./Background.scss";
import {Type} from "../../models/pokemon.entity";
import {v4 as uuidv4} from "uuid";
import Grass from "../../assets/icons/Grass.svg";
import Poison from "../../assets/icons/Poison.svg";

interface TypeProps {
    types: Type[];
}

const typeIconMap: { [key: string]: string } = {
    Grass: "grass",
    Poison: "poison",
};

export default function TypeBadge(props: TypeProps) {
    return (
        <div className={"data__pokemon__type"}>
            {props.types.map((type) => (
                <div key={uuidv4()}
                     className={`data__pokemon__type__name type-${type.type.name}`}>
                    <img src={Grass} className={'data__pokemon__type__img'} alt=""/>
                    <span>{type.type.name}</span>
                </div>
            ))}
        </div>
    );
}

import {Skeleton} from "@mui/material";

interface Props {
    name: string;
    img: string;
}

export default function PokemonImg(props: Props) {
    return (
        <>
            {
                props.img ? (
                    <img
                        src={props.img}
                        alt={props.name}
                    />
                ) : (
                    <Skeleton variant="circular" width={40} height={40}/>
                )
            }
        </>
    );
}

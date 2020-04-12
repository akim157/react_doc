import React from "react";

export default function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Вода закипит.</p>;
    }
    return <p>Вода не закипит.</p>;
}
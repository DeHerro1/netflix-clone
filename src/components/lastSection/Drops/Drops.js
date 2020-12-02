import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';
import './Drops.css';

function Drop(props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="contain">
            <Button
                className="dropdown-basic"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                {props.title}
            </Button>
            <Collapse in={open} className="drop-collapse-text">
                <div >
                    {open ? props.text : null}
                </div>
            </Collapse>
        </div>
    );
}

export default Drop;
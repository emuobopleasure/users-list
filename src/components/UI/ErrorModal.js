import React from 'react'
import Button from './Button'
import Card from './Card'

const ErrorModal = ({ title, message, onConfirm }) => {
    return (
        <div>
            <div className='backdrop' onClick={onConfirm} />
            <div className='modal'>
                <Card>
                    <header className='header'>
                        <h1>
                            {title}
                        </h1>
                    </header>
                    <div className='content'>
                        <p>
                            {message}
                        </p>
                    </div>
                    <footer className='actions'>
                        <Button onClick={onConfirm}>Okay</Button>
                    </footer>
                </Card>
            </div>
        </div>
    )
}

export default ErrorModal
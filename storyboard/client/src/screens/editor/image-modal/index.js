import React from 'react'
import styles from './index.module.sass'
import Paper from '@material-ui/core/Paper'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

export const ImageModal = props => (
    <Modal
        open={props.visible}
        closeAfterTransition
        onClose={props.onClose}
        className={styles.modal}
    >
        <Paper className={styles.cont}>
            <img src='https://images1.penguinrandomhouse.com/cover/9781594633409'/>
            <div>
                <Button size="small" color="primary" variant='outlined'>
                    Add Cover Photo
                </Button>
                <Button size="small" color="primary" variant='contained'>
                    Save
                </Button>
            </div>
        </Paper>
    </Modal>
)
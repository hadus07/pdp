import React from 'react'
import Quill from 'react-quill'
import { Api } from '../../api'
import styles from './index.module.sass'
import { getToken } from '../../helpers'
import 'react-quill/dist/quill.snow.css'
import { ImageModal } from './image-modal'
import { categories } from '../../constants'
import { modules, formats } from './constants'

let initialState = {
    name: '',
    story: '',
    cover: '',
    category: '',
    modalVisible: false,
}

export class Editor extends React.PureComponent {
    state = {
        ...initialState,        
    }

    handleChange = story => this.setState({ story })

    handleAddPhoto = () => this.setState({ modalVisible: true })

    handleModalClose = () => this.setState({ modalVisible: false })

    handleNameChange = ({ target }) => this.setState({ name: target.value })

    handleCategSelect = ({ target }) => this.setState({ category: target.value })

    handleImageUpload = ({ nativeEvent }) => {
        let photo = nativeEvent.target.files[0]
        let formData = new FormData()
        formData.append('photo', photo) // Send form data to BE
        this.setState({ cover: formData })
        const reader = new FileReader()
        reader.readAsDataURL(photo)
        reader.addEventListener(
            'load',
            e => this.setState({ cover: e.target.result }),
        )
    }

    handleOnSave = async () => {
        const { name, cover, category, story } = this.state
        let tmp = {
            cover,
            category,
            title: name,
            content: story,
            token: getToken(),
        }
        try {
            await Api('story', tmp, 'post')
            alert('Story has been added')
            this.setState(initialState)

        } catch(err) {
            console.log(err)
        }
    }

    render = () => {
        const { name, category, story, cover } = this.state
        return (
            <div>
                <Quill
                    theme='snow'
                    value={story}
                    modules={modules}
                    formats={formats}
                    className={styles.editor}
                    onChange={this.handleChange}
                    placeholder='Once upon a time...'
                />
                <div className={styles.overlay}>
                    <input
                        type='text'
                        value={name}
                        placeholder='Name'
                        onChange={this.handleNameChange}
                    />
                    <select onChange={this.handleCategSelect} value={category}>
                        {['Select category', ...categories].map((categ, i) => (
                            <option key={categ} value={i !== 0 && categ}>
                                {categ}
                            </option>
                        ))}
                    </select>
                    <button onClick={this.handleAddPhoto}>Save</button>
                </div>
                <ImageModal
                    image={cover}
                    onSave={this.handleOnSave}
                    onClose={this.handleModalClose}
                    visible={this.state.modalVisible}
                    onChange={this.handleImageUpload}
                />
            </div>
        )
    }
}
import React from "react"
import { connect } from "react-redux"
import { Text, TextInput, View } from "react-native"
import { createEvent, updateEvent } from "../../actions/events"
import { updatePath } from "../../actions/paths"
import { getEvent } from "../../reducers/events"
import styles from "../../styles"
import Page from "../../layouts/Page"
import Button from "../../components/Button"

const EventForm = ({ event, onSubmit }) => {
  const formValues = {
    id: event.id,
    name: event.name,
    repeat: event.repeat,
    interval: event.interval
  }

  const updateValue = (key, value) => {
    formValues[key] = value
  }

  return (
    <Page>
      <Text style={ styles.text }>Edit</Text>
      <View>
        <Text style={ styles.text }>Name</Text>
        <TextInput
          autoFocus={ true }
          defaultValue={ formValues.name }
          placeholder="name"
          onChangeText={ (value) => updateValue("name", value) }
          style={ styles.eventFormInput }
        />
      </View>
      <View>
        <Text style={ styles.text }>Interval (seconds)</Text>
        <TextInput
          defaultValue={ formValues.interval ? (formValues.interval / 1000).toString() : null }
          placeholder="interval"
          onChangeText={ (value) => updateValue("interval", parseInt(value || 0) * 1000) }
          style={ styles.eventFormInput }
        />
      </View>
      <View>
        <Text style={ styles.text }>Number of times to repeat</Text>
        <TextInput
          defaultValue={ formValues.repeat ? formValues.repeat.toString() : null }
          placeholder="repeat"
          keyboardType="numeric"
          onChangeText={ (value) => updateValue("repeat", parseInt(value || 0)) }
          style={ styles.eventFormInput }
        />
      </View>
      <View>
        <Button onPress={ () => onSubmit(formValues) }>
          <Text style={ styles.text }>Submit</Text>
        </Button>
      </View>
    </Page>
  )
}

EventForm.displayName = "EventForm"

const mapStateToProps = (state, {routing}) => {
  const id = routing[1]

  return {
    event: getEvent(state, id),
  }
}

const mapDispatchToProps = (dispatch, {routing}) => {
  const id = routing[1]

  return {
    onSubmit: (values) => {
      dispatch(id ? updateEvent(values) : createEvent(values))
      dispatch(updatePath("events"))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm)

import React from "react"
import { connect } from "react-redux"
import { Text, TextInput, View } from "react-native"
import { updateEvent } from "../actions/events"
import { updatePath } from "../actions/paths"
import { getFirstEvent } from "../reducers/events"
import styles from "../styles"
import Page from "../layouts/Page"
import Button from "../components/Button"

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
          defaultValue={ formValues.name }
          placeholder="name"
          onChangeText={ (value) => updateValue("name", value) }
          style={ styles.eventFormInput }
        />

        <Text style={ styles.text }>Interval (seconds)</Text>
        <TextInput
          defaultValue={ (formValues.interval / 1000).toString() }
          placeholder="interval"
          onChangeText={ (value) => updateValue("interval", parseInt(value || 0) * 1000) }
          style={ styles.eventFormInput }
        />

        <Text style={ styles.text }>Number of times to repeat</Text>
        <TextInput
          defaultValue={ formValues.repeat.toString() }
          placeholder="repeat"
          keyboardType="numeric"
          onChangeText={ (value) => updateValue("repeat", parseInt(value || 0)) }
          style={ styles.eventFormInput }
        />

        <Button onPress={ () => onSubmit(formValues) }>
          <Text style={ styles.text }>Submit</Text>
        </Button>

      </View>
    </Page>
  )
}

EventForm.displayName = "EventForm"

const mapStateToProps = (state) => ({
  event: getFirstEvent(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    dispatch(updateEvent(values))
    dispatch(updatePath("events"))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm)

'use strict';

var QuestionField = React.createClass({
  //TODO: add wrapper for nextStep to validate question value

  //TODO: get some flux in here
  handleQuestionChange: function(event) {
    this.props.saveValues({question: event.target.value});
  },

  render: function() {
    return (
      <div>
        <button onClick={this.props.prevStep}>Prev</button>
        <input type="text" placeholder="What do you want to ask?" defaultValue={this.props.formData.question} onChange={this.handleQuestionChange}/>
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    );
  },
});

module.exports = QuestionField;

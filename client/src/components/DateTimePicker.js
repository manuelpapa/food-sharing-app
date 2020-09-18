import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Form, Input, Button } from "reactstrap";
import DatePicker from "react-datepicker";

export default function DateTimePicker() {
  const { register, handleSubmit, setValue } = useForm();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    register({ name: "start" }, { required: true });
    register({ name: "end" }, { required: false });
  }, [register]);

  const onSearch = (event) => {
    setResult(event);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSearch)}>
        <Row>
          <Col xs="3">
            <Input
              type="number"
              name="account"
              id="account"
              placeholder="AccountId"
              innerRef={register({ required: true, maxLength: 20 })}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <DatePicker
              isClearable
              innerRef={register({ required: true })}
              name="datetime1"
              className={"form-control"}
              selected={startDate}
              onChange={(val) => {
                setStartDate(val);
                setValue("start", val);
              }}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MM-dd-yyyy h:mm"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <DatePicker
              locale="en-GB"
              isClearable
              innerRef={register({ required: false })}
              name="datetime2"
              className={"form-control"}
              selected={endDate}
              onChange={(val) => {
                setEndDate(val);
                setValue("end", val);
              }}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MM-dd-yyyy h:mm"
            />
          </Col>
        </Row>

        <Button>Submit</Button>
      </Form>
      <div>{JSON.stringify(result)}</div>
    </div>
  );
}

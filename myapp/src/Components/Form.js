import React, { useState } from "react";
import {
  Steps,
  Button,
  Input,
  Form,
  Row,
  Col,
  Slider,
  InputNumber,
  Radio,
} from "antd";

const { Step } = Steps;

const MyForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const [inputValueZN, setInputValueZN] = useState(1);

  const onChangeZN = (newValue) => {
    setInputValueZN(newValue);
  };
  const [inputValueINDUS, setInputValueINDUS] = useState(1);
  const onChangeINDUS = (newValue) => {
    setInputValueINDUS(newValue);
  };
  const [inputValueNox, setInputValueNox] = useState(1);
  const onChangeNox = (newValue) => {
    setInputValueNox(newValue);
  };
  const [inputValueRM, setInputValueRM] = useState(1);
  const onChangeRM = (newValue) => {
    setInputValueRM(newValue);
  };
  const [inputValueAge, setInputValueAge] = useState(1);
  const onChangeAge = (newValue) => {
    setInputValueAge(newValue);
  };
  const [inputValueDis, setInputValueDis] = useState(1);
  const onChangeDis = (newValue) => {
    setInputValueDis(newValue);
  };

  const marks = {
    0: "0",
    40: "40",
    100: "100",
  };
  const Binarymarks = {
    0: "0",
    1: "1",
  };

  const [value, setValue] = useState(1);
  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Form onFinish={onFinish}>
      <Steps current={currentStep}>
        <Step title="Step 1" />
        <Step title="Step 2" />
        <Step title="Step 3" />
      </Steps>
      <div style={{ margin: 20 }}>
        <div style={{ display: currentStep === 0 ? "block" : "none" }}>
          <Form.Item name="ZN" rules={[{ required: true }]}>
            <label>Proportion de terrains résidentiels (%) </label>
            <Row>
              <Col span={10}>
                <Slider
                  min={0}
                  max={100}
                  marks={marks}
                  defaultValue={37}
                  onChange={onChangeZN}
                  value={typeof inputValueZN === "number" ? inputValueZN : 0}
                />
              </Col>
              <Col>
                <InputNumber
                  min={1}
                  max={100}
                  style={{
                    margin: "0 16px",
                  }}
                  value={inputValueZN}
                  onChange={onChangeZN}
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item name="INDUS" rules={[{ required: true }]}>
            <label> Proportion d’entreprises non commerciales (%)</label>
            <Row>
              <Col span={10}>
                <Slider
                  min={0}
                  max={100}
                  marks={marks}
                  defaultValue={37}
                  onChange={onChangeINDUS}
                  value={
                    typeof inputValueINDUS === "number" ? inputValueINDUS : 0
                  }
                />
              </Col>
              <Col>
                <InputNumber
                  min={1}
                  max={100}
                  style={{
                    margin: "0 16px",
                  }}
                  value={inputValueINDUS}
                  onChange={onChangeINDUS}
                />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item name="CHAS" rules={[{ required: true }]}>
            <label> Proximité à la rivière Charles</label>
            <Row>
              <Radio.Group onChange={onChangeRadio} value={value}>
                <Radio value={1}>Oui</Radio>
                <Radio value={2}>Non</Radio>
              </Radio.Group>
            </Row>
          </Form.Item>
          <Form.Item name="NOX" rules={[{ required: true }]}>
            <label> Proportion d’entreprises non commerciales</label>
            <Row>
              <Col span={10}>
                <Slider
                  min={0}
                  max={1}
                  marks={Binarymarks}
                  onChange={onChangeNox}
                  value={typeof inputValueNox === "number" ? inputValueNox : 0}
                  step={0.01}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={0}
                  max={1}
                  style={{
                    margin: "0 16px",
                  }}
                  value={inputValueNox}
                  onChange={onChangeNox}
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item name="RM" rules={[{ required: true }]}>
            <label> Nombre moyen de pièces (%) </label>
            <Row>
              <Col span={10}>
                <Slider
                  min={1}
                  max={10}
                  marks={Binarymarks}
                  onChange={onChangeRM}
                  value={typeof inputValueRM === "number" ? inputValueRM : 0}
                  step={0.01}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={10}
                  style={{
                    margin: "0 16px",
                  }}
                  value={inputValueRM}
                  onChange={onChangeRM}
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item name="AGE" rules={[{ required: true }]}>
            <label> Proportion de maisons anciennes (%) </label>
            <Row>
              <Col span={10}>
                <Slider
                  min={0}
                  max={100}
                  marks={marks}
                  defaultValue={37}
                  onChange={onChangeAge}
                  value={
                    typeof inputValueAge === "number" ? inputValueAge : 0
                  }
                />
              </Col>
              <Col>
                <InputNumber
                  min={1}
                  max={100}
                  style={{
                    margin: "0 16px",
                  }}
                  value={inputValueAge}
                  onChange={onChangeAge}
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item name="DIS" rules={[{ required: true }]}>
            <label> Distance aux centres d’emploi </label>
            <Row>
              <Col span={10}>
                <Slider
                  min={0}
                  max={100}
                  marks={marks}
                  defaultValue={37}
                  onChange={onChangeDis}
                  value={
                    typeof inputValueDis === "number" ? inputValueDis : 0
                  }
                />
              </Col>
              <Col>
                <InputNumber
                  min={1}
                  max={100}
                  style={{
                    margin: "0 16px",
                  }}
                  value={inputValueDis}
                  onChange={onChangeDis}
                />
              </Col>
            </Row>
          </Form.Item>

        



        </div>
        <div style={{ display: currentStep === 1 ? "block" : "none" }}>
          <Form.Item label="Input 2" name="input2" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <div style={{ display: currentStep === 2 ? "block" : "none" }}>
          <Form.Item label="Input 3" name="input3" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        {currentStep > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
            Previous
          </Button>
        )}
        {currentStep < 2 && (
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
        )}
        {currentStep === 2 && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
      </div>
    </Form>
  );
};

export default MyForm;

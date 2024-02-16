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
import "../App.css";
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
  const [inputValueRad, setInputValueRad] = useState(1);
  const onChangeRad = (newValue) => {
    setInputValueRad(newValue);
  };
  const [inputValueTax, setInputValueTax] = useState(1);
  const onChangeTax = (newValue) => {
    setInputValueTax(newValue);
  };
  const [inputValuePTRATIO, setInputValuePTRATIO] = useState(1);
  const onChangePTRATIO = (newValue) => {
    setInputValuePTRATIO(newValue);
  };
  const [inputValueB, setInputValueB] = useState(1);
  const onChangeB = (newValue) => {
    setInputValueB(newValue);
  };
  const [inputValueLSTAT, setInputValueLSTAT] = useState(1);
  const onChangeLSTAT = (newValue) => {
    setInputValueLSTAT(newValue);
  };


  const [value, setValue] = useState(1);
  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="form">
      <Form onFinish={onFinish}>
        <div className="steps-container">
          <Steps current={currentStep} className="custom-steps">
            <Step title="Step 1" />
            <Step title="Step 2" />
          </Steps>
        </div>
        <div style={{ margin: 20 }}>
          <div style={{ display: currentStep === 0 ? "block" : "none" }}>
            <Form.Item name="ZN" rules={[{ required: true }]}>
              <div className="inputVar">
                <label className="variables">
                  Proportion de terrains résidentiels (%)
                </label>

                <Row>
                  <Col span={10}>
                    <Col span={2} className="min">
                      <span>0</span>
                    </Col>

                    <Slider
                      min={0}
                      max={100}
                      defaultValue={37}
                      onChange={onChangeZN}
                      value={
                        typeof inputValueZN === "number" ? inputValueZN : 0
                      }
                      classNames="slider"
                      tooltip={{
                        open: true,
                      }}
                      // tooltipPlacement="top"
                    />
                  </Col>
                  <Col span={1} offset={1} className="max">
                    <span>100</span>
                  </Col>
                  <Col>
                    <InputNumber
                      min={0}
                      max={100}
                      style={{
                        margin: "0 16px",
                      }}
                      value={inputValueZN}
                      onChange={onChangeZN}
                    />
                  </Col>
                </Row>
              </div>
            </Form.Item>
            <Form.Item name="INDUS" rules={[{ required: true }]}>
              <label className="variables"> Proportion d’entreprises non commerciales (%)</label>
              <Row>
                <Col span={10}>
                  <Slider
                    min={0}
                    max={100}
                    classNames="slider"
                    tooltip={{
                      open: true,
                    }}
                    defaultValue={37}
                    onChange={onChangeINDUS}
                    value={
                      typeof inputValueINDUS === "number" ? inputValueINDUS : 0
                    }
                  />
                </Col>
                <Col>
                  <InputNumber
                    min={0}
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
              <label className="variables"> Proximité à la rivière Charles</label>
              <Row>
                <Radio.Group onChange={onChangeRadio} value={value}>
                  <Radio value={1}>Oui</Radio>
                  <Radio value={2}>Non</Radio>
                </Radio.Group>
              </Row>
            </Form.Item>
            <Form.Item name="NOX" rules={[{ required: true }]}>
              <label className="variables"> Proportion d’entreprises non commerciales</label>
              <Row>
                <Col span={10}>
                  <Slider
                    min={0}
                    max={1}
                    classNames="slider"
                    tooltip={{
                      open: true,
                    }}
                    onChange={onChangeNox}
                    value={
                      typeof inputValueNox === "number" ? inputValueNox : 0
                    }
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
              <label className="variables"> Nombre moyen de pièces (%) </label>
              <Row>
                <Col span={10}>
                  <Slider
                    min={1}
                    max={10}
                    classNames="slider"
                    tooltip={{
                      open: true,
                    }}
                    onChange={onChangeRM}
                    value={typeof inputValueRM === "number" ? inputValueRM : 0}
                    // step={0.01}
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
              <label className="variables"> Proportion de maisons anciennes (%) </label>
              <Row>
                <Col span={10}>
                  <Slider
                    min={0}
                    max={100}
                    classNames="slider"
                    tooltip={{
                      open: true,
                    }}
                    defaultValue={37}
                    onChange={onChangeAge}
                    value={
                      typeof inputValueAge === "number" ? inputValueAge : 0
                    }
                  />
                </Col>
                <Col>
                  <InputNumber
                    min={0}
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
              <label className="variables"> Distance aux centres d’emploi (KM) </label>
              <Row>
                <Col span={10}>
                  <Slider
                    min={0}
                    max={100}
                    classNames="slider"
                    tooltip={{
                      open: true,
                    }}
                    defaultValue={37}
                    onChange={onChangeDis}
                    value={
                      typeof inputValueDis === "number" ? inputValueDis : 0
                    }
                  />
                </Col>
                <Col>
                  <InputNumber
                    min={0}
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
            <Form.Item name="RAD" rules={[{ required: true }]}>
              <label className="variables"> Accessibilité aux autoroutes </label>
              <Row>
                <Col span={10}>
                  <Slider
                    min={1}
                    max={100}
                    classNames="slider"
                    tooltip={{
                      open: true,
                    }}
                    defaultValue={37}
                    onChange={onChangeRad}
                    value={
                      typeof inputValueRad === "number" ? inputValueRad : 0
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
                    value={inputValueRad}
                    onChange={onChangeRad}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name="TAX" rules={[{ required: true }]}>
              <label className="variables"> Taux d’imposition foncière </label>
              <Row>
                <Col span={10}>
                  <Slider
                    min={0}
                    max={100}
                    classNames="slider"
                    tooltip={{
                      open: true,
                    }}
                    defaultValue={37}
                    onChange={onChangeTax}
                    value={
                      typeof inputValueTax === "number" ? inputValueTax : 0
                    }
                  />
                </Col>
                <Col>
                  <InputNumber
                    min={0}
                    max={100}
                    style={{
                      margin: "0 16px",
                    }}
                    value={inputValueTax}
                    onChange={onChangeTax}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name="PTRATIO" rules={[{ required: true }]}>
              <label className="variables"> Ratio élèves/professeur </label>
              <Row>
                <Col span={10}>
                  <Slider
                    min={1}
                    max={100}
                    classNames="slider"
                    tooltip={{
                      open: true,
                    }}
                    defaultValue={37}
                    onChange={onChangePTRATIO}
                    value={
                      typeof inputValuePTRATIO === "number"
                        ? inputValuePTRATIO
                        : 0
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
                    value={inputValuePTRATIO}
                    onChange={onChangePTRATIO}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name="B" rules={[{ required: true }]}>
              <label className="variables"> Proportion de personnes de couleur (%) </label>
              <Row>
                <Col span={10}>
                  <Slider
                    min={0}
                    max={100}
                    classNames="slider"
                    tooltip={{
                      open: true,
                    }}
                    defaultValue={37}
                    onChange={onChangeB}
                    value={typeof inputValueB === "number" ? inputValueB : 0}
                  />
                </Col>
                <Col>
                  <InputNumber
                    min={0}
                    max={100}
                    style={{
                      margin: "0 16px",
                    }}
                    value={inputValueB}
                    onChange={onChangeB}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name="LSTAT" rules={[{ required: true }]}>
              <label className="variables">
                Pourcentage de la population de classe inférieure (%)
              </label>
              <Row>
                <Col span={10}>
                  <Slider
                    min={0}
                    max={100}
                    classNames="slider"
                    tooltip={{
                      open: true,
                    }}
                    defaultValue={37}
                    onChange={onChangeB}
                    value={
                      typeof inputValueLSTAT === "number" ? inputValueLSTAT : 0
                    }
                  />
                </Col>
                <Col>
                  <InputNumber
                    min={0}
                    max={100}
                    style={{
                      margin: "0 16px",
                    }}
                    value={inputValueLSTAT}
                    onChange={onChangeLSTAT}
                  />
                </Col>
              </Row>
            </Form.Item>
          </div>
          <div style={{ display: currentStep === 1 ? "block" : "none" }}>
            <Form.Item
              label="Input 3"
              name="input3"
              rules={[{ required: true }]}
            >
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
          {currentStep < 1 && (
            <Button type="primary" onClick={handleNext}>
              Next
            </Button>
          )}
          {currentStep === 1 && (
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default MyForm;

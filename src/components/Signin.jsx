import React from 'react';
import { Row, Col, Button, Input } from 'antd';
import styles from './Signin.module.css';

const Signin = () => {
  return (
    <form>
      <Row align="middle" className={styles.signin_row}>
        <Col span={24}>
          <Row className={styles.signin_contents}>
            <Col span={12}>
              <img
                src="/bg_signin.png"
                alt="Signin"
                className={styles.signin_bg}
              />
            </Col>
            <Col span={12}>
              <div className={styles.signin_title}>My Books</div>
              <div className={styles.signin_subtitle}>
                Please Note Your Opinion
              </div>
              <div className={styles.signin_underline} />
              <div className={styles.email_title}>
                Email
                <span className={styles.required}> *</span>
              </div>
              <div className={styles.input_area}>
                <Input
                  placeholder="Email"
                  autoComplete="email"
                  name="email"
                  className={styles.input}
                />
              </div>
              <div className={styles.password_title}>
                Password
                <span className={styles.required}> *</span>
              </div>
              <div className={styles.input_area}>
                <Input
                  type="password"
                  autoComplete="current-password"
                  className={styles.input}
                />
              </div>
              <div className={styles.button_area}>
                <Button
                  size="large"
                  loading={false}
                  onClick={click}
                  className={styles.button}
                >
                  Sign In
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </form>
  );

  function click() {}
};

export default Signin;

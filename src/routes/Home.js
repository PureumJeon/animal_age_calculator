import React from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "🥰",
      birth: "",
      species: "cat",
      humanAge: "___",
      lifeStage: "",
      lifeStageNote: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // 3. 변환한 사람나이(humanAge)를 이용하여 생애주기 구분
  setLifeStage() {
    const { humanAge } = this.state;
    let lifeStage = "";
    let lifeStageNote = "";

    if ((humanAge >= 0, humanAge < 10)) {
      lifeStage = "뽀짝뽀짝 귀여운 유년기🐣";
      lifeStageNote = "다양한 경험을 통해 세상을 배우는 시기!";
    } else if ((humanAge >= 10, humanAge < 20)) {
      lifeStage = "질풍노도 청소년기🐝";
      lifeStageNote = "넘치는 에너지를 해소해주세요!";
    } else if ((humanAge >= 20, humanAge < 40)) {
      lifeStage = "반짝반짝 성년기🌟";
      lifeStageNote = "훌쩍 성숙해지고 독립심이 높아져요~";
    } else if ((humanAge >= 40, humanAge < 60)) {
      lifeStage = "차분함이 빛나는 중년기☺️";
      lifeStageNote = "비만을 주의해야해요!";
    } else if ((humanAge >= 60, humanAge < 80)) {
      lifeStage = "오래오래 함께 할 노년기🥺💖";
      lifeStageNote = "건강검진을 꼭꼭 받아주세요~";
    } else {
      lifeStage = "매일매일 고마운 고령기😘";
      lifeStageNote = "반려동물을 세심하게 보살펴주세요!";
    }

    this.setState({
      lifeStage: lifeStage,
      lifeStageNote: lifeStageNote,
    });
  }

  // 1.  반려동물의 생년월일로 현재 나이(일) - animalageday 구하기
  convertAnimalAgeDay() {
    const { birth } = this.state;
    let birthDay = new Date(birth);
    // console.log("birthDay", { birthDay });
    let toDay = new Date();
    // console.log("newdate", { toDay });
    let animalAgeDay = Math.round(
      (toDay.getTime() - birthDay.getTime()) / 1000 / 60 / 60 / 24 + 1
    );
    console.log("animalageday", { animalAgeDay });

    return animalAgeDay;
  }

  //  2. animalageday를 사람 나이로 변환
  convertHumanAge() {
    const { species } = this.state;
    const animalAgeDay = this.convertAnimalAgeDay();
    let humanAge = "";

    console.log("AnimalAgeDay is ", { animalAgeDay });

    if (species === "cat") {
      humanAge =
        animalAgeDay < 526
          ? animalAgeDay * 0.0396 + 0.9841
          : animalAgeDay * 0.011 + 16;
    } else if (species === "dogS") {
      humanAge =
        animalAgeDay < 418 ? animalAgeDay * 0.0493 : animalAgeDay * 0.011 + 16;
    } else if (species === "dogM") {
      humanAge =
        animalAgeDay < 461
          ? animalAgeDay * 0.0438
          : animalAgeDay * 0.0125 + 14.409;
    } else if (species === "dogL") {
      humanAge =
        animalAgeDay < 467
          ? animalAgeDay * 0.0411
          : animalAgeDay * 0.0148 + 12.27;
    } else {
      humanAge =
        animalAgeDay < 354
          ? animalAgeDay * 0.0384
          : animalAgeDay * 0.0198 + 6.575;
    }

    this.setState({
      humanAge: Math.floor(humanAge),
    });

    return humanAge;
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.convertHumanAge();
    await this.setLifeStage();
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { name } = this.state;
    const { humanAge } = this.state;
    const { lifeStage } = this.state;
    const { lifeStageNote } = this.state;
    return (
      <section className="hero">
        <div className="columns">
          {/* 헤더 */}
          <div className="header">
            <h1 className="title">반려동물 생애주기 계산기</h1>
            <p className="subtitle">
              우리 집 반려동물, 사람나이로는 몇살일까요?
              <br />
              반려동물 정보를 입력해주세요!
            </p>
            <p className="footer">
              반려동물 생애주기 계산기는{" "}
              <a href="https://ipetchu.co.kr/">펫츄</a>의 계산식을 사용했습니다.
            </p>
          </div>
          {/* 폼 */}
          <form onSubmit={this.handleSubmit}>
            <div className="form">
              <div className="form_column">
                <label className="label">이름</label>
                <div>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form_column">
                <label className="label">생년월일</label>
                <input
                  className="input"
                  type="date"
                  name="birth"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form_column">
                <span className="label">동물종류</span>
                <select
                  className="input"
                  name="species"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="cat">고양이</option>
                  <option value="dogS">소형견(성견체중 9kg 이하)</option>
                  <option value="dogM">중형견(성견체중 9-22kg)</option>
                  <option value="dogL">대형견(성견체중 23-40kg)</option>
                  <option value="dogXL">초대형견(성견체중 40kg이상)</option>
                </select>
              </div>
            </div>
            <div>
              <input className="inputBtn" type="submit" value="계산하기😎" />
            </div>
          </form>
          {/* 결과 */}
          <div className="result">
            <p className="name">{name}의 나이를 사람나이로 바꾸면</p>
            <p className="humanAge">{humanAge}세</p>
            <p className="lifeStage">{lifeStage}</p>
            <p className="lifeStageNote">{lifeStageNote}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;

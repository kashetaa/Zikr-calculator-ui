import React from 'react';
import master from '../logo/Mastercard-logo.png';

const calculator = () => {
  return (
    <div className="calculator">
      <div className="jumbotron">
        <div className="container">
          <h4 className="display-4">ZAKAT CALCULATOR</h4>
          <p className="lead">
            <span className="link">HOME / ZAKAT</span> / ZAKAT CALCULATOR
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row mb-2">
          <div className="col-md-6 col-sm-12">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Kiloware.JPG"
              alt=""
              className="coinsimg"
            />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 col-sm-12 ml-3">
            <div className="row g-0 border rounded overflow-hidden mb-4 shadow-sm">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Nisab</li>
                <li class="list-group-item">Zakat year</li>
                <li class="list-group-item">Zakat on Bussiness</li>
                <li class="list-group-item">Loans and Debts</li>
                <li class="list-group-item">Zakat al-Fitr</li>
                <li class="list-group-item">Recipients of Zakat</li>
                <li class="list-group-item">Zakat Calculator</li>
                <li class="list-group-item">Zakat FAQ</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div
            className="col-md-6 col-sm-12 px-5"
            style={{ marginTop: '-2rem' }}
          >
            <h3 className="zk-calculater">ZAKAT CALCULATOR</h3>
            <p className="zk-details">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              natus illum ad, quis distinctio illo, iure nisi obcaecati
              aspernatur cumque pariatur, culpa architecto explicabo eos dolorem
              nam corporis rem eum.
            </p>
            <p className="zk-details mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              natus illum ad, quis distinctio illo, iure nisi obcaecati
              aspernatur cumque pariatur, culpa architecto explicabo eos dolorem
              nam corporis rem eum.
            </p>
            <p className="zk-warning mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              natus illum ad, quis distinctio illo, iure nisi obcaecati
            </p>
          </div>
          <div className="col-md-5 col-sm-12 col-sm-12">
            <div
              className="row g-0 border rounded overflow-hidden mb-4 shadow-sm p-5 "
              style={{ backgroundColor: '#c9ecff' }}
            >
              <img src={master} alt="" width={75} />
              <img src={master} alt="" width={75} />
              <img src={master} alt="" width={75} />
              <img src={master} alt="" width={75} />
            </div>
          </div>
        </div>
        <form>
          <div className="form-row pl-4 pr-5 mb-5">
            <div className="form-group col-md-6 col-sm-12 px-5">
              <label for="currency">Select currency</label>
              <input type="text" className="form-control" id="currency" />
            </div>
            <div className="form-group col-md-6 col-sm-12 px-5">
              <span className="cash">Cash</span>
              <label for="account">In hand and in bank accounts</label>
              <input type="text" className="form-control" id="account" />
            </div>

            <div className="form-group col-md-6 col-sm-12 px-5">
              <label for="nisab">Nisab (updated 09 April 2021):</label>
              <input type="text" className="form-control" id="nisab" />
            </div>
            <div className="form-group col-md-6 col-sm-12 px-5">
              <label for="account">
                Deposited for some future purpose, e.g. Hajj
              </label>
              <input type="text" className="form-control" id="account" />
            </div>

            <div className="form-group col-md-6 col-sm-12 px-5">
              <label for="gold">Value of Gold</label>
              <input type="text" className="form-control" id="gold" />
            </div>
            <div className="form-group col-md-6 col-sm-12 px-5">
              <label for="loans">Given out in loans</label>
              <input type="text" className="form-control" id="loans" />
            </div>

            <div className="form-group col-md-6 col-sm-12 px-5">
              <label for="Silver">Value of Silver</label>
              <input type="text" className="form-control" id="Silver" />
            </div>
            <div className="form-group col-md-6 col-sm-12 px-5">
              <label for="investment">
                Business investment , share, saving Certificates, penssions
                funded by money in ones possession
              </label>
              <input type="text" className="form-control" id="investment" />
            </div>

            <div className="form-group col-md-6 col-sm-12 px-5">
              <span className="form-head">Liabilities</span>
              <label for="money">Borrowed money, goods bought on credit</label>
              <input type="text" className="form-control" id="money" />
            </div>
            <div className="form-group col-md-6 col-sm-12 px-5">
              <span className="form-head">Trade Goods</span>

              <label for="stock">Value of stock</label>
              <input type="text" className="form-control" id="stock" />
            </div>

            <div className="form-group col-md-6 col-sm-12 px-5">
              <label for="money">Wages due to employees</label>
              <input type="text" className="form-control" id="money" />
            </div>
            <div className="form-group col-md-6 col-sm-12 mt-4 pl-5">
              <button className="btn btn-primary col-md-5">Calculate</button>
              <span className="col-md-1"></span>
              <button className="btn btn-secondary col-md-5"> Reset</button>
            </div>

            <div className="form-group col-md-6 col-sm-12 px-5">
              <label for="Taxes">
                Taxes, rent, utility bills due immediatelly
              </label>
              <input type="text" className="form-control" id="Taxes" />
            </div>
            <div className="form-group col-md-6 col-sm-12 mt-4 asset">
              <div className="col-md-6 col-sm-12">
                <span className="assets">Total Assets</span>
                <span className="value">$0.00</span>
              </div>
              <div className="col-md-6 col-sm-12">
                <span className="zk-payable">Zakat Payable</span>
                <span className="value">$0.00</span>
              </div>
            </div>
            <div className="col-md-6  col-sm-12"></div>
            <button className="btn btn-primary col-md-6">Donate Zakat</button>
          </div>
        </form>
      </div>
      <footer>footer</footer>
    </div>
  );
};

export default calculator;

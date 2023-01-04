import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ProductRow from '../products/ProductRow';
import { connect } from 'react-redux';

class ProductsBanner extends Component {
  render() {
    const products = [
      {
        product: {
          name: 'Fablets',
          description: 'Kid-friendly, mess-free flavored toothpaste tablets',
          price: 10.00,
          category_id: 'categories[0].id'
        },
        variant: [
          {
            name: 'Quantity',
            options: [
              {
                description:30,
                price: 6.00
              },
              {
                description: 60,
                price: 10.00
              },
              {
                description: 100,
                price: 14.00
              }
            ]
          }
        ]
      },
      {
        product: {
          name: 'Fablet Dispenser',
          description: 'Powered by finger-print bio-technology, the fablet dispenser links to the mobile app to give you a holistic brushing record.',
          price: 30.00,
          category_id: 'categories[1].id'
        },
        variant: [
          {
            name: 'Size',
            options: [
              {
                description: 'Small',
                price: 25.00
              },
              {
                description: 'Medium',
                price: 30.00
              },
              {
                description: 'Large',
                price: 35.00
              }
            ]
          }
        ]
      }
    ]

    return (
      <div className="custom-container py-5 my-5">
        <div className="d-flex flex-column align-items-center mb-5 pb-4">
          <p className="font-color-medium mb-4">
            Introducing Our Latest Products
          </p>
          <p
            className="text-center font-size-display1 mb-3 font-weight-medium"
            style={{ maxWidth: '32rem' }}
          >
            Limited reservations on upcoming products and restocks.
          </p>
          <Link href="/collection">
            <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
              <p className="mr-3">See more products</p>
              <img src="/icon/arrow-long-right.svg" />
            </a>
          </Link>
        </div>
        <ProductRow products={products.slice(0, 4)} />
      </div>
    );
  }
}

ProductsBanner.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductsBanner.defaultProps = {
  products: [],
};

export default connect(state => state)(ProductsBanner);

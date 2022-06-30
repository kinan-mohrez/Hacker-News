import React from 'react';
import Card from 'react-bootstrap/Card'

export default function Footer() {
	return <div>
		<Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
		  <ul>
				<li>Guideines</li>
				<li>FAQ</li>
				<li>Lists</li>
				<li>API</li>
				<li>Security</li>
				<li>Legal</li>
				<li>Apply to YC</li>
				<li>Contact</li>
			</ul> <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
		
		</div>
}

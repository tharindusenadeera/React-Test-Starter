import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';

describe('group', () => {
  it('should render hello with the name when name is provided', () => {
    render(<Greet name="Tharindu" />);

    screen.debug();
  });
});


import { ExtractTasteeCode, TasteeError } from '../index';
import { expect, assert } from 'chai';
import 'mocha';

describe('ExtractTasteeCode class', () => {

  it("should return an array with nothing", () => {
    let instructions = ExtractTasteeCode.extract('./specs/data/no_tastee_lines_in_file.tee')
    expect(instructions).to.be.empty;
  });

  it("should throw an exception because it's not a tastee file", () => {
    expect(function() { ExtractTasteeCode.extract('./specs/data/bad_format.toto')}).to.throw(/tastee/);
  });

  it('should return array with tastee code when we have many pre balise', () => {
    let instructions = ExtractTasteeCode.extract('./specs/data/valide_html_and_tastee_file.tee')
    expect(instructions).to.be.an('array').that.does.include("//savor search_tastee.yaml");
    expect(instructions).to.be.an('array').that.does.include("go to 'https://www.google.fr'");
    expect(instructions).to.be.an('array').that.does.include("fill 'lst-ib' field with 'https://tastee.github.io/'");
    expect(instructions).to.be.an('array').that.does.include("click on '#tsf > div.tsf-p > div.jsb > center > input[type=\"submit\"]:nth-child(1)'");
    expect(instructions).to.be.an('array').that.does.include("check that '//*[@id=\"rso\"]/div/div/div[1]/div/div/h3/a' is equal to 'Tastee — test framework : test made Natural'");  
  });

  it('should return array with tastee code when we have just on balise pre', () => {
    let instructions = ExtractTasteeCode.extract('./specs/data/valide_html_and_tastee_file_with_on_block.tee')
    expect(instructions).to.be.an('array').that.does.include("//savor search_tastee.yaml");
    expect(instructions).to.be.an('array').that.does.include("go to 'https://www.google.fr'");
    expect(instructions).to.be.an('array').that.does.include("fill 'lst-ib' field with 'https://tastee.github.io/'");
    expect(instructions).to.be.an('array').that.does.include("click on '#tsf > div.tsf-p > div.jsb > center > input[type=\"submit\"]:nth-child(1)'");
    expect(instructions).to.be.an('array').that.does.include("check that '//*[@id=\"rso\"]/div/div/div[1]/div/div/h3/a' is equal to 'Tastee — test framework : test made Natural'");  
  });

});

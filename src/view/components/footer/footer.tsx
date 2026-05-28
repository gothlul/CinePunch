import type Author from "../../../core/models/author-model";
import githubIcon from '../../../shared/assets/github-icon.svg';
import linkedinIcon from '../../../shared/assets/linkedin-icon.svg';
import emailIcon from '../../../shared/assets/gmail-icon.svg';

type FooterParametters = {
  copy: string
  color: string
  authors: Author[]
};

function Footer({
  copy,
  authors,
  color
}: FooterParametters) {

  if (!copy || !color) return null;

  return (
    <div
        className='w-full flex justify-center items-center'
        style={{ backgroundColor: `${color}` }}
    >
        <div className="flex flex-col min-w-1/4 max-w-5/8 gap-15 pt-15 text-white pb-40 text-xs">
            <p>{copy}</p>
            <div className="flex flex-row gap-20">
                {
                    authors.map((e) => {
                        return <div className="flex flex-col gap-3">
                            <h4 className="font-semibold italic">{e.name}:</h4>
                            <ul>
                                {
                                    e.linkedinUsername?
                                    <li>
                                        <a className="flex flex-row items-center gap-3.5" href={e.linkedinUrl} target="_blank">
                                            <i><img className="size-3.5" src={linkedinIcon} /></i>
                                            <p>{e.linkedinUsername}</p>
                                        </a>
                                    </li>
                                    :<div></div>
                                }
                                {
                                    e.githubUsername?
                                    <li>
                                        <a className="flex flex-row items-center gap-3.5" href={e.githubUrl} target="_blank">
                                            <i><img className="size-3.5" src={githubIcon} /></i>
                                            <p>{e.githubUsername}</p>
                                        </a>
                                    </li>
                                    :<div></div>
                                }
                                {
                                    e.email?
                                    <li className="flex flex-row gap-3.5 items-center">
                                        <i><img className="size-3.5" src={emailIcon} /></i>
                                        <p>{e.email}</p>
                                    </li>
                                    :<div></div>
                                }
                            </ul>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Footer;
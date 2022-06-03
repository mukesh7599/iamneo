import { Draggable } from "react-beautiful-dnd";
import { LoremIpsum } from "lorem-ipsum";
import { generateFromString } from "generate-avatar";
import React, { useMemo,useState,useEffect } from "react";
import styled, { css } from "styled-components";



const CardHeader = styled.div`
  font-weight: 500;
`;


const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;


const ListItem = ({ item, index }) => {
  const [profile, setProfile] = useState("");
  const [candidatePhone, setCandidatePhone]= useState("");
  const [candidateMail,setCandidateMail] = useState("");

  useEffect(() => {
        const url = 'https://randomuser.me/api/';

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
         console.log(json.results );  
         setProfile(json.results[0].name.first);   
         setCandidatePhone(json.results[0].phone); 
         setCandidateMail(json.results[0].email);          
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);


  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <DragItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardHeader>{profile}</CardHeader>
            <span>{candidateMail}</span>
            <CardFooter>
              <span>{candidatePhone}</span>
            </CardFooter>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
